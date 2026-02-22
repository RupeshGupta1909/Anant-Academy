import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import User from '../src/models/User.model.js'

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load .env file from backend directory
const envPath = join(__dirname, '..', '.env')
if (existsSync(envPath)) {
  dotenv.config({ path: envPath })
  console.log('📄 Loaded .env file from:', envPath)
} else {
  console.warn('⚠️  Warning: .env file not found at:', envPath)
  console.warn('   Trying to load from process.env...')
}

const EMAIL = 'rupesh@gupta.com'
const PASSWORD = 'password'

async function createUser() {
  try {
    // Connect to database
    const uri = process.env.MONGODB_URI
    if (!uri) {
      console.error('❌ Error: MONGODB_URI is not set in .env file')
      console.error('Please make sure you have a .env file in the backend directory with MONGODB_URI set')
      console.error('Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database')
      process.exit(1)
    }
    console.log('Connecting to database...')
    // Hide password in connection string for security
    const maskedUri = uri.replace(/:([^:@]+)@/, ':****@')
    console.log('Using MongoDB URI:', maskedUri)
    await mongoose.connect(uri, {
      autoIndex: true,
    })
    console.log('✅ Connected to database')

    // Check if user already exists
    const existingUser = await User.findOne({ email: EMAIL })
    if (existingUser) {
      console.log(`⚠️  User with email ${EMAIL} already exists`)
      console.log('User details:', {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
        isActive: existingUser.isActive
      })
      await mongoose.connection.close()
      process.exit(0)
    }

    // Hash password
    console.log('Hashing password...')
    const hashedPassword = await bcrypt.hash(PASSWORD, 10)

    // Create user
    console.log('Creating user...')
    const newUser = await User.create({
      email: EMAIL,
      password: hashedPassword,
      role: 'admin',
      isActive: true
    })

    console.log('✅ User created successfully!')
    console.log('User details:', {
      id: newUser._id,
      email: newUser.email,
      role: newUser.role,
      isActive: newUser.isActive,
      createdAt: newUser.createdAt
    })

    // Close database connection
    await mongoose.connection.close()
    console.log('Database connection closed')
    process.exit(0)

  } catch (error) {
    console.error('❌ Error creating user:', error.message)
    if (error.code === 11000) {
      console.error('User with this email already exists')
    } else if (error.message.includes('ECONNREFUSED')) {
      console.error('\n⚠️  Database connection failed!')
      console.error('Possible issues:')
      console.error('1. MongoDB is not running')
      console.error('2. MONGODB_URI in .env file is incorrect')
      console.error('3. Network/firewall blocking the connection')
      console.error('\nPlease check your .env file and ensure MongoDB is accessible')
    }
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close()
    }
    process.exit(1)
  }
}

// Run the script
createUser()

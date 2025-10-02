import mongoose from 'mongoose'

let isConnected = false

export async function connectToDatabase() {
  if (isConnected) return
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/learnnest'
  mongoose.set('strictQuery', true)
  await mongoose.connect(uri, {
    autoIndex: true,
  })
  isConnected = true
}



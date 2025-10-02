const bcrypt = require('bcryptjs')

module.exports = {
  async up(db, client) {
    // Create users collection
    await db.createCollection('users')
    
    // Create index on email
    await db.collection('users').createIndex({ email: 1 }, { unique: true })
    
    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    await db.collection('users').insertOne({
      email: 'admin@learnnest.com',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  },

  async down(db, client) {
    await db.collection('users').drop()
  }
}

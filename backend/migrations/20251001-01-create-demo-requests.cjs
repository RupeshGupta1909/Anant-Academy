/**
 * Create initial collection and indexes for demo requests
 */

module.exports = {
  async up(db) {
    const collection = await db.createCollection('demo_requests')
    await collection.createIndex({ createdAt: 1 })
    await collection.createIndex({ phone: 1 })
    await collection.createIndex({ subject: 1, classGrade: 1 })
  },

  async down(db) {
    await db.collection('demo_requests').drop()
  }
}



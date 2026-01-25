/**
 * Create initial collection and indexes for tutor applications
 */

module.exports = {
  async up(db) {
    const collection = await db.createCollection('tutor_applications')
    await collection.createIndex({ createdAt: 1 })
    await collection.createIndex({ email: 1 })
    await collection.createIndex({ status: 1 })
  },

  async down(db) {
    await db.collection('tutor_applications').drop()
  }
}

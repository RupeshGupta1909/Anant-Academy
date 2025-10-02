/**
 * Add composite index on (phoneCountryCode, phone)
 */

module.exports = {
  async up(db) {
    await db.collection('demo_requests').createIndex({ phoneCountryCode: 1, phone: 1 })
  },

  async down(db) {
    try {
      await db.collection('demo_requests').dropIndex('phoneCountryCode_1_phone_1')
    } catch (e) {}
  }
}



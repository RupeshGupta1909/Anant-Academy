/**
 * Add studentName field to demo_requests collection
 * Set default value "abcde" for existing records
 */

module.exports = {
  async up(db) {
    await db.collection('demo_requests').updateMany(
      {},
      {
        $set: { studentName: 'abcde' }
      }
    )
  },

  async down(db) {
    await db.collection('demo_requests').updateMany(
      {},
      {
        $unset: { studentName: '' }
      }
    )
  }
}


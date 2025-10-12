import mongoose from 'mongoose'

const DemoRequestSchema = new mongoose.Schema(
  {
    parentName: { type: String, required: true, trim: true },
    studentName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phoneCountryCode: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    subject: { type: String, enum: ['P', 'C', 'M', 'B'], required: true },
    classGrade: { type: Number, required: true, min: 1, max: 12 },
    preferredDate: { type: Date },
    preferredTime: { type: String, trim: true },
    notes: { type: String, trim: true },
    preferredLanguage: { type: String, trim: true },
    hasDevice: { type: Boolean },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    adminNotes: { type: String, trim: true }
  },
  { timestamps: true, collection: 'demo_requests' }
)

DemoRequestSchema.index({ createdAt: 1 })
DemoRequestSchema.index({ phoneCountryCode: 1, phone: 1 })

const DemoRequest = mongoose.model('DemoRequest', DemoRequestSchema)

export default DemoRequest



import mongoose from 'mongoose'

const TutorApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    resumeLink: { type: String, required: true, trim: true },
    comfortableWithOnlineClass: { type: Boolean, required: true },
    hasPenTab: { type: Boolean, required: true },
    hasLaptopWithWebcam: { type: Boolean, required: true },
    status: { type: String, enum: ['pending', 'reviewed', 'approved', 'rejected'], default: 'pending' },
    adminNotes: { type: String, trim: true }
  },
  { timestamps: true, collection: 'tutor_applications' }
)

TutorApplicationSchema.index({ createdAt: 1 })
TutorApplicationSchema.index({ email: 1 })
TutorApplicationSchema.index({ status: 1 })

const TutorApplication = mongoose.model('TutorApplication', TutorApplicationSchema)

export default TutorApplication

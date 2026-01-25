import TutorApplication from '../models/TutorApplication.model.js'

export async function createTutorApplication(payload) {
  const created = await TutorApplication.create(payload)
  return created
}

export async function getAllTutorApplications() {
  const applications = await TutorApplication.find().sort({ createdAt: -1 })
  return applications
}

export async function updateTutorApplicationStatus(id, status, adminNotes) {
  const updated = await TutorApplication.findByIdAndUpdate(
    id,
    { status, adminNotes },
    { new: true, runValidators: true }
  )
  return updated
}

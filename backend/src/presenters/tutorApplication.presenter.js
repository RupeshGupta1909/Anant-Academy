import { MESSAGES } from '../config/constants.js'

export const tutorApplicationPresenter = {
  success(createdDoc) {
    return {
      success: true,
      message: MESSAGES.TUTOR_APPLICATION_CREATED,
      data: {
        id: createdDoc._id.toString(),
        name: createdDoc.name,
        email: createdDoc.email,
        createdAt: createdDoc.createdAt,
      },
    }
  }
}

export function formatTutorApplicationList(application) {
  return {
    id: application._id.toString(),
    name: application.name,
    email: application.email,
    phone: application.phone,
    resumeLink: application.resumeLink,
    comfortableWithOnlineClass: application.comfortableWithOnlineClass,
    hasPenTab: application.hasPenTab,
    hasLaptopWithWebcam: application.hasLaptopWithWebcam,
    status: application.status || 'pending',
    adminNotes: application.adminNotes,
    createdAt: application.createdAt,
    updatedAt: application.updatedAt
  }
}

import { MESSAGES } from '../config/constants.js'

export const demoRequestPresenter = {
  success(createdDoc) {
    return {
      success: true,
      message: MESSAGES.DEMO_REQUEST_CREATED,
      data: {
        id: createdDoc._id.toString(),
        subject: createdDoc.subject,
        classGrade: createdDoc.classGrade,
        createdAt: createdDoc.createdAt,
      },
    }
  }
}

export function formatDemoRequestList(request) {
  return {
    id: request._id.toString(),
    parentName: request.parentName,
    studentName: request.studentName,
    email: request.email,
    phoneCountryCode: request.phoneCountryCode,
    phone: request.phone,
    subject: request.subject,
    classGrade: request.classGrade,
    preferredDate: request.preferredDate,
    preferredTime: request.preferredTime,
    notes: request.notes,
    preferredLanguage: request.preferredLanguage,
    hasDevice: request.hasDevice,
    status: request.status || 'pending',
    createdAt: request.createdAt,
    updatedAt: request.updatedAt
  }
}



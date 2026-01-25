export const APP_CONSTANTS = Object.freeze({
  companyName: 'AnantAcademy',
  appName: 'AnantAcademy API',
})

export const SUBJECTS = Object.freeze({
  P: 'Physics',
  C: 'Chemistry',
  M: 'Maths',
  B: 'Biology'
})

export const MESSAGES = Object.freeze({
  DEMO_REQUEST_CREATED: 'Your demo request has been submitted successfully.',
  TUTOR_APPLICATION_CREATED: 'Your tutor application has been submitted successfully. We will review it and get back to you soon.',
})

export const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production'



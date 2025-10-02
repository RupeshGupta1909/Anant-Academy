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
})

export const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production'



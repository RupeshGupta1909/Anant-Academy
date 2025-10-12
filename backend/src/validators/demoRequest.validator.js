import Joi from 'joi'

const phoneRegex = /^\d{6,15}$/
const countryCodeRegex = /^\+\d{1,3}$/

const schema = Joi.object({
  parentName: Joi.string().trim().min(2).max(100).required(),
  studentName: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().trim().email().required(),
  phoneCountryCode: Joi.string().trim().pattern(countryCodeRegex).required(),
  phone: Joi.string().trim().pattern(phoneRegex).required(),
  subject: Joi.string().valid('P', 'C', 'M', 'B').required(),
  classGrade: Joi.number().integer().min(1).max(12).required(),
  preferredDate: Joi.date().optional(),
  preferredTime: Joi.string().trim().optional(),
  notes: Joi.string().trim().max(1000).allow('').optional(),
  preferredLanguage: Joi.string().trim().valid('English', 'Hindi', 'Other').required(),
  hasDevice: Joi.boolean().required(),
})

export function validateCreateDemoRequest(payload) {
  return schema.validate(payload, { abortEarly: true })
}



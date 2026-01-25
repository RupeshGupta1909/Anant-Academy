import Joi from 'joi'

const urlRegex = /^https?:\/\/.+/

const schema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().min(10).max(15).required(),
  resumeLink: Joi.string().trim().pattern(urlRegex).required().messages({
    'string.pattern.base': 'Resume link must be a valid URL (starting with http:// or https://)'
  }),
  comfortableWithOnlineClass: Joi.boolean().required(),
  hasPenTab: Joi.boolean().required(),
  hasLaptopWithWebcam: Joi.boolean().required(),
})

export function validateCreateTutorApplication(payload) {
  return schema.validate(payload, { abortEarly: true })
}

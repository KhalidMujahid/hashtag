const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  subject: Joi.string().required().min(1),
  message: Joi.string().required().min(1),
});

const registerValidtion = Joi.object().keys({
  fname: Joi.string().trim().required(),
  lname: Joi.string().trim().required(),
  whatsapp_number: Joi.number().min(11).required(),
  skills: Joi.string().trim().required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).required(),
});

const loginValidtion = Joi.object().keys({
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { schema, registerValidtion, loginValidtion };

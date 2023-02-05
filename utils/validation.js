const Joi = require("joi");

const schema = Joi.object().keys({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	subject: Joi.string().required().min(1),
	message: Joi.string().required().min(1)
})

module.exports = schema;
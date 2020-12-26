import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dob: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } })
});

export default schema;
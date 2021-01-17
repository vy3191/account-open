import Joi from 'joi';

const now = Date.now();
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18)); 

export default Joi.object({
  product: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'Product type is required!',
      }
    }
  )
}).unknown();

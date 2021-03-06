import Joi from 'joi';

const now = Date.now();
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18)); 

export default Joi.object({
  flatNumber: Joi
    .string()
    .alphanum()
    .required()
    .options({
      messages: {
        'any.required': 'Enter your House Number/Flat Number!',
      }
    }
  ),
  address1: Joi
    .string()
    .alphanum()
    .required()
    .options({
      messages: {
        'any.required': 'Oops. Seems like you forgot to fill your address!',
        'string.alphanum': 'Hmm. That doesn\'t seem like a valid last name, at least to me!'
      }
    }
  ),
  city: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'City is required!'        
      }
    }
  ),
  state: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'State is required!',
      }
    }
  ),
  country: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'Country is required!',
      }
    }
  ),
  zipCode: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'Zip code is required!',
      }
    }
  ),
  moveInDate: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'Move-in date is required!',
      }
    }
  )
}).unknown();


// take a joi schema and create a validator function for redux form
export default (schema) => (values) => {
  const result = schema.validate(values, { abortEarly: false }),
        errors = {}

  if (result.error !== null) {
    result.error.details.forEach( (cur) => {
      const path = cur.path[cur.path.length - 1],
            message = cur.message;

      errors[path] 
        && (errors[path] += message) 
        || (errors[path] = message);
    });
  }  
  console.log('degub>>>>>>>', DEBUG)
  if (DEBUG) {
    console.log('Log>>>>> createJoiValidator.js', errors)
  }
  return errors;
};

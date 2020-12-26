
// take a joi schema and create a validator function for redux form
export default (schema) => (values) => {
  const result = schema.validate(values, { abortEarly: false });
  const errors = {}
  if (result.error !== null) {
    result.error.details.forEach( (cur) => {
      const path = cur.path[cur.path.length - 1];
      const message = cur.message;
      errors[path] && (errors[path] += message) || (errors[path] = message)
    })
  }   
  return errors;
};

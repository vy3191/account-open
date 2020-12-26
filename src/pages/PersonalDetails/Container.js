
import { reduxForm, Form } from 'redux-form';
import { AOField, AOButton } from 'components';
import { createJoiValidation } from 'utils';
import schema from './schema.joi';

let PersonalDetailsContainer = (props) => {
  
  const { handleSubmit } = props;
  
  return (
    <Form onSubmit={handleSubmit}>
      <AOInput 
        id="firstName"
        label="First Name"
      />
      <AOInput 
        id="middleName"
        label="Middle Name"
        hint="Enter if you have any"
      />
      <AOInput 
        id="lastName"
        label="Last Name"
      />
      <AOInput 
        id="dob"
        label="Date of Birth"
        typeName="date"
      />
      <AOInput 
        id="phone"
        label="Contact Number"
        typeName="tel"
      />
      <AOInput 
        id="email"
        label="Email"
        typeName="email"
      />
      <AOButton 
        buttonText="Continue"
      />
    </Form>
  )
}

PersonalDetailsContainer = reduxForm({
  form: 'personalDetails',
  destroyOnUnmount: false,
  validate: createJoiValidation(schema)
})(PersonalDetailsContainer)

export default PersonalDetailsContainer;

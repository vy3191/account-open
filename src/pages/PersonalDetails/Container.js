
import { reduxForm } from 'redux-form';
import { AOField, AOButton } from 'components'

let PersonalDetailsContainer = (props) => {
  
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <AOField 
        id="firstName"
        label="First Name"
      />
      <AOField 
        id="middleName"
        label="Middle Name"
        hint="Enter if you have any"
      />
      <AOField 
        id="lastName"
        label="Last Name"
      />
      <AOField 
        id="dob"
        label="Date of Birth"
        typeName="date"
      />
      <AOField 
        id="phone"
        label="Contact Number"
        typeName="tel"
      />
      <AOField 
        id="email"
        label="Email"
        typeName="email"
      />
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

PersonalDetailsContainer = reduxForm({
  form: 'personalDetails',
  destroyOnUnmount: false
})(PersonalDetailsContainer)

export default PersonalDetailsContainer;

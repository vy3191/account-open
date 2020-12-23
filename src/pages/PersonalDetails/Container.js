
import { reduxForm } from 'redux-form';
import { AOField } from 'components'

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
        hint="MM/DD/YYYY"
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
      <button type="submit">Continue</button>
    </form>
  )
}

PersonalDetailsContainer = reduxForm({
  form: 'personDetails'
})(PersonalDetailsContainer)

export default PersonalDetailsContainer;

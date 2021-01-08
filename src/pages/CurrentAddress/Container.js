
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let CurrentAddressContainer = (props) => {
  
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <AOInput 
        id="flatNumber"
        label="Flat Number"
      />
      <AOInput 
        id="address1"
        label="Address-1"
      />
      <AOInput 
        id="address2"
        label="Address-2"
      />
      <AOInput 
        id="city"
        label="City"
      />
      <AOInput 
        id="state"
        label="State"
      />
      <AOInput 
        id="country"
        label="County"
      />
      <AOInput 
        id="zipCode"
        label="Zip Code"
      />
        <AOInput 
        id="moveInDate"
        label="Move-in Date"
        typeName="date"        
      />
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

CurrentAddressContainer = reduxForm({
  form: 'currentAddress',
  destroyOnUnmount: false
})(CurrentAddressContainer)

export default CurrentAddressContainer;



import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let PreviousAddressContainer = (props) => {
  
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
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

PreviousAddressContainer = reduxForm({
  form: 'previousAddress',
  destroyOnUnmount: false
})(PreviousAddressContainer)

export default PreviousAddressContainer;


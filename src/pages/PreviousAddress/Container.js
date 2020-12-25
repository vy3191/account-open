
import { reduxForm } from 'redux-form';
import { AOField, AOButton } from 'components'

let PreviousAddressContainer = (props) => {
  
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <AOField 
        id="flatNumber"
        label="Flat Number"
      />
      <AOField 
        id="address-1"
        label="Address-1"
      />
      <AOField 
        id="address-2"
        label="Address-2"
      />
      <AOField 
        id="city"
        label="City"
      />
      <AOField 
        id="state"
        label="State"
      />
      <AOField 
        id="country"
        label="County"
      />
       <AOField 
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
  form: 'previousAddress'
})(PreviousAddressContainer)

export default PreviousAddressContainer;



import { reduxForm } from 'redux-form';
import { AOField, AOButton } from 'components'

let CurrentAddressContainer = (props) => {
  
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
        <AOField 
        id="movingDate"
        label="Moving Date"
        typeName="date"        
      />
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

CurrentAddressContainer = reduxForm({
  form: 'currentAddress'
})(CurrentAddressContainer)

export default CurrentAddressContainer;


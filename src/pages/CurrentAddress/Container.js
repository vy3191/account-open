
import { reduxForm } from 'redux-form';
import { AOField, AOButton } from 'components'

let CurrentAddressContainer = (props) => {
  
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <AOInput 
        id="flatNumber"
        label="Flat Number"
      />
      <AOInput 
        id="address-1"
        label="Address-1"
      />
      <AOInput 
        id="address-2"
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
  form: 'currentAddress',
  destroyOnUnmount: false
})(CurrentAddressContainer)

export default CurrentAddressContainer;


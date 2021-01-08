
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let ProductsContainer = (props) => {  
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <AOInput 
        id="rent"
        label="Rent"
        typeName="number"
      />
      <AOInput 
        id="emi"
        label="Emi(s)"
      />
      <AOInput 
        id="healthInsurance"
        label="Health Insurance"
      />
      <AOInput 
        id="otherProducts"
        label="Other Monthly Expenses*"
      />
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

ProductsContainer = reduxForm({
  form: 'currentAddress',
  destroyOnUnmount: false
})(ProductsContainer)

export default ProductsContainer;


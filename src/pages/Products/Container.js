
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let ProductsContainer = (props) => {  
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <AOInput 
        id="product"
        label="Product: Credit Card, Loan, Over draft"
        hint="Either of the above three products or combination of any products separated by comma"
      />
     
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

ProductsContainer = reduxForm({
  form: 'products',
  destroyOnUnmount: false
})(ProductsContainer)

export default ProductsContainer;


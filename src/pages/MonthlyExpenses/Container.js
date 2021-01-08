
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let MonthlyExpensesContainer = (props) => {  
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
        id="otherMonthlyExpenses"
        label="Other Monthly Expenses*"
      />
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

MonthlyExpensesContainer = reduxForm({
  form: 'monthlyExpenses',
  destroyOnUnmount: false
})(MonthlyExpensesContainer)

export default MonthlyExpensesContainer;


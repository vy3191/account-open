
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components';
import { createJoiValidation } from 'utils';
import schema from './schema.joi';


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
  destroyOnUnmount: false,
  validate: createJoiValidation(schema)
})(MonthlyExpensesContainer)

export default MonthlyExpensesContainer;


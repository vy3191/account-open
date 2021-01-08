
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from '../Products/node_modules/components'

let MonthlyExpensesContainer = (props) => {
  const [isEmployed, setIsEmployed ] = React.useState(false);
  const handleBlur = (e) => {
    const { value } = e.target;
    const status = ['employed', 'working', 'consultant']  
    
    setIsEmployed(status.includes(value.trim().toLowerCase()));
  }
  
  
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <AOInput 
        id="employmentStatus"
        label="Employment Status"
        onBlur={ handleBlur }
      />
      { isEmployed && 
        <>
          <AOInput 
            id="jobTitle"
            label="Job title"
          />
          <AOInput 
            id="employerName"
            label="Employer Name"
          />
        </>
      }
      <AOInput 
        id="grossIncome"
        label="Gross Income"
        typeName="number"
      />
      <AOInput 
        id="monthlyIncomeAfterTax"
        label="Monthly Income After Tax"
        typeName="number"
      />
      <AOInput 
        id="monthlyIncomeReducedBy"
        label="Monthly Income Reduced By" 
        typeName="number"
      />
      <AOButton 
        buttonText="Continue"
      />
    </form>
  )
}

MonthlyExpensesContainer = reduxForm({
  form: 'monthlyIncome',
  destroyOnUnmount: false
})(MonthlyExpensesContainer)

export default MonthlyExpensesContainer;


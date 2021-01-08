
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let MonthlyExpensesContainer = (props) => {


  
  const { handleSubmit } = props;
  console.log('emp status', employmentStatus)
  return (
    <form onSubmit={handleSubmit}>
      <AOInput 
        id="employmentStatus"
        label="Employment Status"
      />
      <AOInput 
        id="jobTitle"
        label="Job title"
      />
      <AOInput 
        id="employerName"
        label="Employer Name"
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

MonthlyExpensesContainer = reduxForm({
  form: 'currentAddress',
  destroyOnUnmount: false
})(MonthlyExpensesContainer)

export default MonthlyExpensesContainer;


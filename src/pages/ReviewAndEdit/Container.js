
import { reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import { AOInput, AOButton } from 'components'

let ReviewAndEditContainer = (props) => {
  const { 
      applicationData: { 
        id, 
        personalDetails, 
        currentAddress, 
        previousAddress, 
        monthlyIncome, 
        monthlyExpenses }
    } = useSelector(state => state.applicationReducer);  
  const { handleSubmit } = props;
  
  return (
    <div>Review</div>
  )
}

ReviewAndEditContainer = reduxForm({
  form: 'ReviewAndEdit',
  destroyOnUnmount: false
})(ReviewAndEditContainer)

export default ReviewAndEditContainer;


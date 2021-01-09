
import { reduxForm } from 'redux-form';
import { AOInput, AOButton } from 'components'

let ReviewAndEditContainer = (props) => {
  
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


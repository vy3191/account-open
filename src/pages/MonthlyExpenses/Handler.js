import { useDispatch, useSelector } from 'react-redux';
import MonthExpensesContainer from './Container';
import { saveApplication, setIsReview } from '../../redux/actions'

function MonthlyExpenses(props) {

  const {applicationData: {id, monthlyExpenses}} = useSelector((state) => state.applicationReducer),
                      dispatch = useDispatch();
  const onSubmit = (values) => {
    const payload = { monthlyExpenses: values}
    dispatch(saveApplication(id,payload, handleRoute ))
  }

  const handleRoute = () => {    
    props.history.push("/products")  
  };

  return (
    <div>
      <MonthExpensesContainer onSubmit={ onSubmit } initialValues={ monthlyExpenses }/>
    </div>
  )
}

export default MonthlyExpenses;

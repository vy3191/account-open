import { useDispatch, useSelector } from 'react-redux';
import MonthExpensesContainer from './Container';
import { saveApplication } from '../../redux/actions'

function MonthlyExpenses(props) {

  const {applicationData: {id}} = useSelector((state) => state.applicationReducer),
                      dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    const payload = { monthlyExpenses: values}
    dispatch(saveApplication(id,payload, handleRoute ))
  }

  const handleRoute = () => {    
    props.history.push("/review")  
  };

  return (
    <div>
      <MonthExpensesContainer onSubmit={ onSubmit } />
    </div>
  )
}

export default MonthlyExpenses;

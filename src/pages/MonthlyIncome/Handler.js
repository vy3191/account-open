import { useDispatch, useSelector } from 'react-redux';
import MonthIncomeContainer from './Container';
import { saveApplication } from '../../redux/actions'

function MonthlyIncome(props) {
  const {applicationData: {id, monthlyIncome }} = useSelector((state) => state.applicationReducer),
                      dispatch = useDispatch();
  const onSubmit = (values) => {
    const payload = { monthlyIncome: values}
    dispatch(saveApplication(id,payload, handleRoute ))
  }

  const handleRoute = () => {    
    props.history.push("/monthly-expenses")  
  };

  return (
    <div>
      <MonthIncomeContainer onSubmit={ onSubmit } initialValues={ monthlyIncome } />
    </div>
  )
}

export default MonthlyIncome;

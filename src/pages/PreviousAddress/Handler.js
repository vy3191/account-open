import { useDispatch, useSelector } from 'react-redux';
import PreviousAddressContainer from './Container';
import { saveApplication } from '../../redux/actions'

function PreviousAddressDetails(props) {
  const { applicationData: { id, previousAddress }} = useSelector( (state) => state.applicationReducer),
                  dispatch = useDispatch();
  const onSubmit = values => {
    const previousAddressData = { previousAddress: values}
    dispatch(saveApplication(id, previousAddressData, handleRoute))
 }

 const handleRoute = () => {
   debugger;
   props.history.push('/current-address');
 }
  return (
    <PreviousAddressContainer onSubmit={ onSubmit } initialValues={ previousAddress }/>
  )
}

export default PreviousAddressDetails;

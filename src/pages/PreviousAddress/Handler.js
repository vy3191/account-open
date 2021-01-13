import { useDispatch, useSelector } from 'react-redux';
import PreviousAddressContainer from './Container';
import { saveApplication, setIsReview } from '../../redux/actions'

function PreviousAddressDetails(props) {
  const { applicationData: { id, previousAddress }} = useSelector( (state) => state.applicationReducer),
                                { isEditFromReview } = useSelector((state) => state.pagesReducer),
                                           dispatch = useDispatch();
  const onSubmit = values => {
    const previousAddressData = { previousAddress: values}
    dispatch(saveApplication(id, previousAddressData, handleRoute))
 }

 const handleRoute = () => {
    const nextRoute = isEditFromReview && '/review' || "/monthly-income";
    props.history.push(nextRoute);
    dispatch(setIsReview(false));
   
 }
  return (
    <PreviousAddressContainer onSubmit={ onSubmit } initialValues={ previousAddress }/>
  )
}

export default PreviousAddressDetails;

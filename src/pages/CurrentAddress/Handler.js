import { useDispatch, useSelector } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { saveApplication, setIsReview } from '../../redux/actions';
import CurrentAddressContainer from './Container'

const CurrentAddressDetails = (props) => {
  const currentAddressFormSelector = formValueSelector('currentAddress');
  const { applicationData: { id, currentAddress } } = useSelector(state => state.applicationReducer),
                      { isEditFromReview } = useSelector((state) => state.pagesReducer),
                      currentMoveInDate = useSelector(state => currentAddressFormSelector(state, 'moveInDate')),
                      dispatch = useDispatch(),
                      todayDate = new Date(),
                      moveInDate = new Date(currentMoveInDate),
                      yearDiff = todayDate.getFullYear() - moveInDate.getFullYear();                    

  const onSubmit = values => {
    const payload = { currentAddress: values };

    yearDiff >= 3 && (payload.previousAddress = {})
    // let payload;
    // yearDiff < 3 ?
    // (payload = { currentAddress: values, previousAddress: null}) :
    // (payload = { currentAddress: values })
    dispatch(saveApplication(id, payload, handleRoute));
 };

 const handleRoute = () => {  
   const route = ( yearDiff >= 3 ) ? "/monthly-income" : "/previous-address";
   const nextRoute = isEditFromReview && '/review' || route;
   props.history.push(nextRoute);
   dispatch(setIsReview(false));
 };

  return (
    <div>
      <CurrentAddressContainer onSubmit={ onSubmit } initialValues={ currentAddress } />
    </div>
  );
};

export default CurrentAddressDetails;

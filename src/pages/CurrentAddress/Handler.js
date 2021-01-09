import { useDispatch, useSelector } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { saveApplication} from '../../redux/actions';
import CurrentAddressContainer from './Container'

const CurrentAddressDetails = (props) => {
  const currentAddressFormSelector = formValueSelector('currentAddress');
  const { applicationData: { id } } = useSelector(state => state.applicationReducer),
                      currentMoveInDate = useSelector(state => currentAddressFormSelector(state, 'moveInDate')),
                      dispatch = useDispatch(),
                      todayDate = new Date(),
                      moveInDate = new Date(currentMoveInDate),
                      yearDiff = todayDate.getFullYear() - moveInDate.getFullYear();                    

  const onSubmit = values => {
    const payload = { currentAddress: values };

    yearDiff < 3 && (payload.previousAddress = null)
    // let payload;
    // yearDiff < 3 ?
    // (payload = { currentAddress: values, previousAddress: null}) :
    // (payload = { currentAddress: values })
    dispatch(saveApplication(id, payload, handleRoute));
 };

 const handleRoute = () => {
  
        ( yearDiff >= 3 )
          ? props.history.push("/monthly-income")
          : props.history.push("/previous-address")
 };

  return (
    <div>
      <CurrentAddressContainer onSubmit={ onSubmit }/>
    </div>
  );
};

export default CurrentAddressDetails;

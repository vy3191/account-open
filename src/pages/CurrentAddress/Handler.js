import { useDispatch, useSelector } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { saveApplication} from '../../redux/actions';
import CurrentAddressContainer from './Container'

const CurrentAddressDetails = (props) => {
  const currentAddressFormSelector = formValueSelector('currentAddress');
  const { applicationData: { id } } = useSelector(state => state.applicationReducer),
                      currentMoveInDate = useSelector(state => currentAddressFormSelector(state, 'moveInDate')),
                      dispatch = useDispatch();

  const onSubmit = values => {
    const payload = { currentAddress: values};
    dispatch(saveApplication(id, payload, handleRoute));
 };

 const handleRoute = () => {
   const todayDate = new Date(),
         moveInDate = new Date(currentMoveInDate),
         yearDiff = todayDate.getFullYear() - moveInDate.getFullYear();
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

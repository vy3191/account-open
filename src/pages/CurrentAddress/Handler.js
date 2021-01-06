import { useDispatch, useSelector } from 'react-redux';
import { saveApplication} from '../../redux/actions';
import CurrentAddressContainer from './Container'

const CurrentAddressDetails = (props) => {
  const { applicationData: {id }} = useSelector(state => state.applicationReducer),
                      dispatch = useDispatch();

  const onSubmit = values => {
    const payload = { currentAddress: values};
    dispatch(saveApplication(id, payload, handleRoute));
 };

 const handleRoute = () => {
   props.history.push("/monthly-income");
 };

  return (
    <div>
      <CurrentAddressContainer onSubmit={ onSubmit }/>
    </div>
  );
};

export default CurrentAddressDetails;

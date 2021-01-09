import { useDispatch, useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';
import { saveApplication} from '../../redux/actions';
import ReviewAndEditContainer from './Container'

const ReviewAndEdit = (props) => {
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
      <ReviewAndEditContainer onSubmit={ onSubmit }/>
    </div>
  );
};

export default ReviewAndEdit;

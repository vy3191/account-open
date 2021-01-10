import { useDispatch, useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';
import { saveApplication, setIsReview} from '../../redux/actions';
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

  const trackEdit = () => {
    dispatch(setIsReview(true));
  };
  
  return (
    <div>
      <ReviewAndEditContainer onSubmit={ onSubmit } trackEdit={ trackEdit } />
    </div>
  );
};

export default ReviewAndEdit;

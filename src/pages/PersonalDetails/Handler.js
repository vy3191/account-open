import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PersonalDetailsContainer from './Container';
import { saveApplication,setIsReview } from '../../redux/actions';

const PersonalDetailsHandler = (props) => {
   const { applicationData: { id, personalDetails } } = useSelector((state) => state.applicationReducer),
         { isEditFromReview } = useSelector((state) => state.pagesReducer),
         dispatch = useDispatch();      
   
   const onSubmit = values => {     
      const payload = { personalDetails: values };

      dispatch(saveApplication(id, payload, handleRoute));    
   };

   const handleRoute = () => {
      const nextRoute = isEditFromReview && '/review' || '/current-address';
      props.history.push(nextRoute);
      dispatch(setIsReview(false));
   };

   return(
     <PersonalDetailsContainer onSubmit={ onSubmit } initialValues={ personalDetails } />
   );
};

export default PersonalDetailsHandler;

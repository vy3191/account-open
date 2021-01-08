import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PersonalDetailsContainer from './Container';
import { saveApplication } from '../../redux/actions';

const PersonalDetailsHandler = (props) => {
   const { applicationData: { id } } = useSelector((state) => state.applicationReducer),
         dispatch = useDispatch();      
   
   const onSubmit = values => {     
      const payload = { personalDetails: values };

      dispatch(saveApplication(id, payload, handleRoute));    
   };

   const handleRoute = () => {
      props.history.push('/current-address');
   };

   return(
     <PersonalDetailsContainer onSubmit={ onSubmit }/>
   );
};

export default PersonalDetailsHandler;

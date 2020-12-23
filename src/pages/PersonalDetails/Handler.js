import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PersonalDetailsContainer from './Container';

const PersonalDetailsHandler = () => {
   const onSubmit = values => {
      console.log('values>>>', values)
   }
   return(
     <PersonalDetailsContainer onSubmit={ onSubmit }/>
   )
}

export default PersonalDetailsHandler;

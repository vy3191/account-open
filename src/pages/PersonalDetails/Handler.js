import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PersonalDetailsContainer from './Container';

const PersonalDetailsHandler = () => {
   const onSubmit = values => {
      console.log('values>>>', values)
   }
   return(
     <PersonalDetailsContainer handleSubmit={ onSubmit }/>
   )
}

export default PersonalDetailsHandler;

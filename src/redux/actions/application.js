import { createApplication, getApplication } from '../services';

export const START_APPLICATION = 'START_APPLICATION';
export const GET_APPLICATION_BY_ID = 'GET_APPLICATION_BY_ID';

export const startApplication = () => ({
    type: START_APPLICATION,
    payload: createApplication()      
});

export const getApplicationById = (id) => ({
    type: GET_APPLICATION_BY_ID,
    payload:  getApplication(id)
});
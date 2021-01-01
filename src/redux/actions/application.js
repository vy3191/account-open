import { createApplication, getApplication, updateApplication } from '../services';

export const START_APPLICATION = 'START_APPLICATION';
export const GET_APPLICATION_BY_ID = 'GET_APPLICATION_BY_ID';
export const SAVE_APPLICATION = 'SAVE_APPLICATION';

export const startApplication = () => ({
    type: START_APPLICATION,
    payload: createApplication()      
});

export const getApplicationById = (id) => ({
    type: GET_APPLICATION_BY_ID,
    payload: getApplication(id)
});

export const saveApplication = (id, payload) => ({
    type: SAVE_APPLICATION,
    payload: updateApplication(id, payload)
});
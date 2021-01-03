import { createApplication as createApplicationService, getApplication, updateApplication } from '../services';

export const START_APPLICATION = 'START_APPLICATION';
export const GET_APPLICATION_BY_ID = 'GET_APPLICATION_BY_ID';
export const SAVE_APPLICATION = 'SAVE_APPLICATION';

export const createApplication = () => ({
    type: START_APPLICATION,
    payload: createApplicationService()      
});

export const getApplicationById = (id) => ({
    type: GET_APPLICATION_BY_ID,
    payload: getApplication(id)
});

export const saveApplication = (id, payload) => ({
    type: SAVE_APPLICATION,
    payload: updateApplication(id, payload)
});
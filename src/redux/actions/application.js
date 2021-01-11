import { createApplication as createApplicationService, getApplication, updateApplication } from '../services';

export const CREATE_APPLICATION = 'CREATE_APPLICATION';
export const GET_APPLICATION_BY_ID = 'GET_APPLICATION_BY_ID';
export const SAVE_APPLICATION = 'SAVE_APPLICATION';
export const SET_MENU_ID = 'SET_MENU_ID';

export const createApplication = () => ({
    type: CREATE_APPLICATION,
    payload: createApplicationService()      
});

export const getApplicationById = (id) => ({
    type: GET_APPLICATION_BY_ID,
    payload: getApplication(id)
});

export const saveApplication = (id, payload, handleSuccess) => ({
    type: SAVE_APPLICATION,
    payload: updateApplication(id, payload, handleSuccess)
});

export const setMenuId = (menuId) => ({
    type: SET_MENU_ID,
    meta: {
        menuId
    }
});

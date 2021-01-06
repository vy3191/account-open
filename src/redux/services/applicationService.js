import ServiceUtils from './service-utils';

const services = new ServiceUtils('http://localhost:8080');

export const createApplication = () => services.post('/applications');

export const getApplication = (id) => services.get(`/applications/${id}`);

export const updateApplication = (id, payload, handleSuccess) => services.patch(`/applications/${id}`, payload, handleSuccess);


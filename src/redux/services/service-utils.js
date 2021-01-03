export default class ServiceUtils {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  fetchRequest(path, method="GET", payload, handleSuccess) {
    const url = `${this.baseUrl}${path}`,
          reqObj = { method };
    
    ['POST', 'PUT', 'PATCH'].includes(method) && (
      reqObj.headers = {
        "Content-Type": "application/json"
      },
      reqObj.body = JSON.stringify(payload)
    );
    return fetch(url, reqObj)
          .then(res => res.json())
          .then((data) => { 
              handleSuccess(); 
              return data;
          });
    }
 
  get(path) {
    return this.fetchRequest(path)
  }

  post(path,  payload) {
    return this.fetchRequest(path, 'POST', payload)
  }

  patch(path,payload) {
    return this.fetchRequest(path, 'PATCH', payload)
  }

  put(path, payload, handleSuccess) {
    return this.fetchRequest(path, 'PUT', payload, handleSuccess)
  }

  delete(path) {
    return this.fetchRequest(path, 'DELETE');
  }

}


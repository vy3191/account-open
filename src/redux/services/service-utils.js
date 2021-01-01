class ServiceUtils {
  constructor(baseUrl, payload, headers = {}) {
    this.baseUrl = baseUrl;
    this.payload = payload
    this.headers = headers
  }

  fetchRequest(path, method="GET", payload) {
    const url = `${this.baseUrl}${path}`,
          reqObj = { method };
    
    ['POST', 'PUT'].includes(method) && (
      reqObj.headers = {
        "Content-Type": "application/json"
      },
      reqObj.body = JSON.stringify(payload)
    );
    return fetch(url, reqObj).then(res => res.json());
  }
 
  get(path) {
    return fetchRequest(path)
  }

  post(path,  payload) {
    return fetchRequest(path, 'POST', payload)
  }

  patch(path,payload) {
    return fetchRequest(path, 'PATCH', payload)
  }

  put(path, payload) {
    return fetchRequest(path, 'PUT', payload)
  }

  delete(path) {
    return fetchRequest(path, 'DELETE');
  }


}
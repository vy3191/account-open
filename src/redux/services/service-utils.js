class ServiceUtils {
  constructor(baseUrl, payload, headers = {}) {
    this.baseUrl = baseUrl;
    this.payload = payload
    this.headers = headers
  }
 
  getData(path) {
    const url = `${this.baseUrl}${path}`
    return fetch(url).then(res=> res.json())
  }

  postData(path, payload) {
    const url = `${this.baseUrl}${path}`
    const obj = {
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
      body: payload
    }
    return fetch(url, obj).then(res=> res.json())
  }

  updateData(path, post) {
    const url = `${this.baseUrl}${path}`
    const obj = {
      method: 'PUT',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(payload)
    }
    return fetch(url, obj).then(res=> res.json())
  }

  deleteData(path,id) {
    const url = `${this.baseUrl}${path}/${id}`
    const obj = {
      method: 'DELETE',
      headers: {
        "Content-type": 'application/json'
      }
    }
    return fetch(url, obj).then(res=> res.json())

  }

}
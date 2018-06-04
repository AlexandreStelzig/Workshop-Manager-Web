export default class BaseService {
  static get urlSubName() {
    return 'api';
  }

  static post(methodName, body) {
    return fetch(`/${this.urlSubName}/${methodName}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(response =>
      response.json().then(dataReceived => ({
        data: dataReceived,
        status: response.status,
      })));
  }


  static put(methodName, body) {
    return fetch(`/${this.urlSubName}/${methodName}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(response =>
      response.json().then(dataReceived => ({
        data: dataReceived,
        status: response.status,
      })));
  }

  static get(methodName, body) {
    return fetch(`/${this.urlSubName}/${methodName}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    }).then(response =>
      response.json().then(dataReceived => ({
        data: dataReceived,
        status: response.status,
      })));
  }
}

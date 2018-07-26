export default class BaseService {
  static get urlBaseName() {
    if (process.env.NODE_ENV === 'development') {
      return '/api';
    } else if (process.env.NODE_ENV === 'production') {
      return 'http://workshopmangernodejs-env.m6p9w3tdrq.ca-central-1.elasticbeanstalk.com';
    }
    return '';
  }

  static post(methodName, body) {
    return fetch(`${this.urlBaseName}/${methodName}`, {
      method: 'POST',
      mode: 'cors',
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

  static get(methodName) {
    return fetch(`${this.urlBaseName}/${methodName}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response =>
      response.json().then(dataReceived => ({
        data: dataReceived,
        status: response.status,
      })));
  }
}

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
}

export default class BaseService {
  static get urlSubName() {
    return 'api';
  }

  static async post(methodName, body) {
    return fetch(`/${this.urlSubName}/${methodName}`, {
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

    /* const rawResponse = await fetch(`/${this.urlSubName}/auth/validatecredentials`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'test', password: 'test'}),
    });
    console.log(rawResponse);
    return true; */
  }
}

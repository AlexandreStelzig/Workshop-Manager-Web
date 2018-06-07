/* global localStorage */
import 'babel-polyfill';
import BaseService from './BaseService';


export default class AuthService extends BaseService {
  static getIsLoggedIn() {
    // getter
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedIn);
  }

  static validateCredentials(providedUsername, providedPassword) {
    return super.post('auth/validatecredentials', {
      username: providedUsername,
      password: providedPassword,
    }).then((res) => {
      if (res.data.status === 'Success!') {
        return true;
      }
      return false;
    });
  }

  static logout() {
    // setter
    localStorage.setItem('isLoggedIn', false);
  }

  static login() {
    localStorage.setItem('isLoggedIn', true);
  }
}

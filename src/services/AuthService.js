/* global localStorage */
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
    }).then(res => res.data);
  }

  static logout() {
    // setter
    localStorage.setItem('isLoggedIn', false);
  }

  static login() {
    localStorage.setItem('isLoggedIn', true);
  }
}

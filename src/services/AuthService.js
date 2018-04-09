/* global localStorage */
import { Component } from 'react';

export default class AuthService extends Component {
  static getIsLoggedIn() {
    // getter
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedIn);
  }

  static validateLogin() {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: 'user',
        password: 'user',
      }),
    }).then((res) => {
      if (res) {
        localStorage.setItem('isLoggedIn', true);
      }
    });
  }

  static logout() {
    // setter
    localStorage.setItem('isLoggedIn', false);
  }
}

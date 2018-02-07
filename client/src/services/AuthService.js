/* global localStorage */
import { Component } from 'react';

export default class AuthService extends Component {
  static getIsLoggedIn() {
    // getter
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedIn);
  }

  static setIsLoggedIn(isLoggedIn) {
    // setter
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }
}

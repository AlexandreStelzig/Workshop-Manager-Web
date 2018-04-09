/* global localStorage */
import { Component } from 'react';

export default class AuthService extends Component {
  static getIsLoggedIn() {
    // getter
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedIn);
  }

  static validateLogin(){
	fetch('/api/login', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    userName: 'yourValue',
	    password: 'yourOtherValue',
	  })
	})
  }

  static setIsLoggedIn(isLoggedIn) {
    // setter
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }
}

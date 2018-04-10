/* global localStorage */
import { Component } from 'react';

export default class AuthService extends Component {
  static getIsLoggedIn() {
    // getter
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedIn);
  }

  static validateCredentials(providedUserName, providedPassword) {
    return fetch('/api/validatecredentials', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: providedUserName,
        password: providedPassword,
      }),
    }).then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status,
      })).then(res => {
        return(res.data);
     }));
  }

  static logout() {
    // setter
    localStorage.setItem('isLoggedIn', false);
  }

  static login(){
  	localStorage.setItem('isLoggedIn', true);
  }
}

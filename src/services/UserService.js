/* global localStorage */
import BaseService from './BaseService';

export default class UserService extends BaseService {
  
  static getAllUsers(){
    return super.get('users/getallusers', null).then(res => res.data);
  }
}

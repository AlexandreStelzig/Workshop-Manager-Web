import BaseService from './BaseService';

export default class UserService extends BaseService {
  static getAllUsers() {
    return super.get('users/', null).then(res => res.data);
  }

  static createUser(user) {
    return super.post('users/', user).then(res => res.data);
  }

  static updateUser(user) {
    return super.put(`users/${user.userId}`, user).then(res => res.data);
  }
}

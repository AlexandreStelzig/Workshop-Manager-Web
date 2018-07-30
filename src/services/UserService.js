import BaseService from './BaseService';

export default class UserService extends BaseService {
  static getAllUsers() {
    return super.get('users/getallusers', null).then(res => res.data);
  }

  static createUser(user) {
    return super.post('users/createuser', {
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      telephone: user.telephone,
      dateOfBirth: user.dateOfBirth,
      userType: user.userType,
      language: user.language,
      driversLicense: user.driversLicense,
      password: user.password,
      isActive: user.isActive,
    }).then(res => res.data);
  }

  static updateUser(user) {
    return super.put('users/updateuser', {
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      telephone: user.telephone,
      dateOfBirth: user.dateOfBirth,
      userType: user.userType,
      language: user.language,
      driversLicense: user.driversLicense,
      password: user.password,
      isActive: user.isActive,
    }).then(res => res.data);
  }
}

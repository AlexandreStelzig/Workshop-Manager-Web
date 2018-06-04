/* global localStorage */
import BaseService from './BaseService';

export default class UserService extends BaseService {
  
  static getAllUsers(){
    return super.get('users/getallusers', null).then(res => res.data);
  }

    static createUser(user){
    return super.put('users/createuser', {
		userId: user.userId,
		firstName: user.FirstName,
		lastName: user.lastName, 
		username: user.username,
		email: user.email,
		telephone: user.telephone,
		dateOfBirth: user.dateOfBirth,
		userType: user.userType,
		languages: user.languages,
		driversLicense: user.driversLicense,
		password: user.password, 
		status: user.status,
    }).then(res => res.data);
  }
}

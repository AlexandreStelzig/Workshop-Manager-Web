import BaseService from './BaseService';

export default class RegistrationService extends BaseService {
  static submitRegistration(registrationValues) {
    return super.post('registrations', registrationValues).then(res => res.data);
  }

  static getRegistration(id) {
    return super.get(`registrations/${id}`).then(res => res.data);
  }
}

import BaseService from './BaseService';

export default class RegistrationService extends BaseService {
  static submitRegistration(registrationValues) {
    return super.post('registrations', registrationValues).then(res => res.data);
  }

  static getRegistration(id) {
    return super.get(`registrations/${id}`).then(res => res.data);
  }

  static editRegistration(reg) {
    return super.put(`registrations/${reg.registrationId}`, reg).then(res => res.data);
  }
}

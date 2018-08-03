import BaseService from './BaseService';

export default class RegistrationService extends BaseService {
  static submitRegistration(registrationValues) {
    return super.post('registration/submit', registrationValues).then(res => res.data);
  }

  static getRegistrations() {
    return super.get('registration/').then(res => res.data);
  }

  static getStatusCount() {
    return super.get('registration/status-count').then(statusCount => statusCount.data);
  }
}

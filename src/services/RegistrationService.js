import BaseService from './BaseService';

export default class RegistrationService extends BaseService {
  static submitRegistration(registrationValues) {
    return super.post('registration/submit', registrationValues).then(res => res.data);
  }
}

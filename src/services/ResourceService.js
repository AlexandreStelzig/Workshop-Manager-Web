import BaseService from './BaseService';

export default class ResourceService extends BaseService {
  static addResource(resource) {
    return super.post('resources/', resource).then(res => res.data);
  }

  static getResources() {
    return super.get('resources/').then(res => res.data);
  }
}

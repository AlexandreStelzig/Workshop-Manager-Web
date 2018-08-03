export default class ValidationUtilities {
  static stringValidator(value) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    }

    return response;
  }


  static emptyValidator(value) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    }

    return response;
  }

  static emailValidator(value) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailIsValid = re.test(String(value).toLowerCase());

    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    } else if (!emailIsValid) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be an email';
      response.notification.title = 'Invalid Value';
    }

    return response;
  }

  static phoneValidator(value) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var phoneIsValid = re.test(String(value).toLowerCase());

    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    } else if (!phoneIsValid) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be a phone number';
      response.notification.title = 'Invalid Value';
    }

    return response;
  }

}
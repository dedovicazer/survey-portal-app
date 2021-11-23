import { loginUser } from '../utills/request';
import requestTypes from '../constants/requestTypes';
import { fetchNext } from '../utills/request';

export default class AccountApi {
  static login = (credentials) => loginUser('sign_in', credentials);

  static logout = () => fetchNext(requestTypes.DELETE, 'sign_out');
}

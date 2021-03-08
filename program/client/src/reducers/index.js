import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile';
import buddies from './buddies';
import drives from './drives';
import filesystem from './filesystem';

export default combineReducers({
  auth,
  alert,
  profile,
  buddies,
  drives,
  filesystem,
});

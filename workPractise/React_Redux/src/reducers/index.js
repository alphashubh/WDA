import {combineReducers} from 'redux';

import Users from './reducer-users';
import ActiveUser from './reducer-active-user';

const allReducers =combineReducers({
    user:Users,
    activeUser:ActiveUser
});

export default allReducers;
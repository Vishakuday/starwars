import { combineReducers } from 'redux';
import reducerlogin from './reducerlogin';
import reducerplanets from './reducerplanets';

const rootReducer = combineReducers({
 loggedin:reducerlogin,
 planets:reducerplanets
});

export default rootReducer;

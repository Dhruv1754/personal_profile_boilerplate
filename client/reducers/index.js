import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './demoReducer';
export default combineReducers({
  counter,
  routing: routerReducer
});

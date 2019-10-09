import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {stuff,otherStuff} from './demoReducer';
export default combineReducers({
  stuff,otherStuff,
  routing: routerReducer
});

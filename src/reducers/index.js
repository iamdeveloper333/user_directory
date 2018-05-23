import {combineReducers} from 'redux';
import {directoriesReducers} from './directoriesReducers';

export default combineReducers({
  directories: directoriesReducers
})
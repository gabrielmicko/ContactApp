import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import Settings from './Settings';

const rootReducer = combineReducers({
  Settings,
  Router: routerReducer,
});

export default rootReducer;

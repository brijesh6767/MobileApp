import {combineReducers} from '@reduxjs/toolkit';
import {loginApi} from '../RTKQuery/login';
import { loginUpdate } from '../RTKQuery/loginUpdate';

const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [loginUpdate.reducerPath]:loginUpdate.reducer,

});

export default rootReducer;

import {combineReducers} from '@reduxjs/toolkit';
import {loginApi} from '../RTKQuery/login';

const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
});

export default rootReducer;

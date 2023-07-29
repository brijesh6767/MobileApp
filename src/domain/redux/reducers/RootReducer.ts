import {combineReducers} from '@reduxjs/toolkit';
import {loginApi} from '../RTKQuery/login';
import { loginUpdate } from '../RTKQuery/loginUpdate';
import { myProfile } from '../RTKQuery/myProfile';
import { syncUpdate } from '../RTKQuery/syncUpdate';


const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [loginUpdate.reducerPath]:loginUpdate.reducer,
  [myProfile.reducerPath]:myProfile.reducer,
  [syncUpdate.reducerPath]:syncUpdate.reducer,



});

export default rootReducer;

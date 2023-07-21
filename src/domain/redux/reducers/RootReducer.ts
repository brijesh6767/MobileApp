import {combineReducers} from '@reduxjs/toolkit';
import {loginApi} from '../RTKQuery/login';
import { loginUpdate } from '../RTKQuery/loginUpdate';
import { myProfile } from '../RTKQuery/myProfile';


const rootReducer = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [loginUpdate.reducerPath]:loginUpdate.reducer,
  [myProfile.reducerPath]:myProfile.reducer,


});

export default rootReducer;

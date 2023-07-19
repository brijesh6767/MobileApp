import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducers/RootReducer';
import {loginApi} from './RTKQuery/login';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import { loginUpdate } from './RTKQuery/loginUpdate';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      loginApi.middleware,
      loginUpdate.middleware,
    ]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>; //interface for state of the store
export type AppDispatch = typeof store.dispatch; //interface for dispacth hook

export default store;

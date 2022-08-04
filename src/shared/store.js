import { combineReducers, createStore } from 'redux';
// import {authenticationReducer} from "./features/login/state/AuthenticationReducer";
// import {menuReducer} from "./features/menu/state/MenuReducer";
import { transactionReducer } from '../features/transaction/state/TransactionReducer';

const rootReducer = combineReducers({
  // authenticationReducer,
  transactionReducer,
  // menuReducer
});
export const setupStore = () => {
  return createStore(rootReducer);
};

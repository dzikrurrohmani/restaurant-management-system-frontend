import { combineReducers, createStore } from 'redux';
import { transactionReducer } from '../features/transaction/state/TransactionReducer';

const rootReducer = combineReducers({
  transactionReducer,
});
export const setupStore = () => {
  return createStore(rootReducer);
};

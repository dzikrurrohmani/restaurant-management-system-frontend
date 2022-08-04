import { TRANSACTION_ACTION_TYPE } from '../../../shared/constants';

export function addOrder(menu, qty) {
  return {
    type: TRANSACTION_ACTION_TYPE.ADD_ORDER,
    payload: {
      menu,
      qty,
    },
  };
}

export function clearOrder() {
  return {
    type: TRANSACTION_ACTION_TYPE.CLEAR_ORDER,
  };
}

export function submitOrder() {
  return {
    type: TRANSACTION_ACTION_TYPE.SUBMIT_ORDER,
  };
}

export function addFBMenu(foods, bevs) {
  return {
    type: TRANSACTION_ACTION_TYPE.CATALOGUE_ORDER,
    payload: {
      foods,
      bevs,
    },
  };
}

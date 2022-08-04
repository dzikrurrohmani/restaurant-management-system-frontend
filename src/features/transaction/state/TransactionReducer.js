import { TRANSACTION_ACTION_TYPE } from '../../../shared/constants';

const transactionInitialState = {
  catalogue: {
    foods: [],
    beverages: [],
  },
  orderItems: [],
  total: 0,
};

export function transactionReducer(state = transactionInitialState, action) {
  switch (action.type) {
    case TRANSACTION_ACTION_TYPE.ADD_ORDER:
      const orderItem = action.payload;
      const newOrderItems = [...state.orderItems, orderItem];
      let total = 0;
      for (let order of newOrderItems) {
        total = total + order.qty * order.menu.price;
      }
      return {
        ...transactionInitialState,
        orderItems: newOrderItems,
        total: total,
      };
    case TRANSACTION_ACTION_TYPE.CLEAR_ORDER:
      return { ...transactionInitialState, orderItems: [], total: 0 };
    case TRANSACTION_ACTION_TYPE.CATALOGUE_ORDER:
      return {
        ...transactionInitialState,
        catalogue: {
          foods: action.payload.foods,
          beverages: action.payload.bevs,
        },
      };
    case TRANSACTION_ACTION_TYPE.SUBMIT_ORDER:
      return state;
    default:
      return state;
  }
}

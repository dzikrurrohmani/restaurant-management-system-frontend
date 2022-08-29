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
      // const newOrderItems = state.orderItems.map((order) => {
      //   if (order.menu === orderItem.menu) {
      //     return {
      //       ...order,
      //       qty: order.qty + orderItem.qty,
      //     };
      //   } else {
      //     return [order, orderItem];
      //   }
      // });
      // const newOrderItems = [...state.orderItems, orderItem];
      const orderItem = action.payload;
      let duplicate = false;
      // let newOrderItems = [];
      // if (state.orderItems.length>0) {
      for (let order of state.orderItems) {
        if (order.menu === orderItem.menu) {
          order.qty = Number(order.qty) + Number(orderItem.qty);
          duplicate = true;
        }
      }
      // }
      // if (!duplicate) {
      //   newOrderItems.push([...state.orderItems, orderItem]);
      // } else {
      //   newOrderItems.push(orderItem);
      // }
      const newOrderItems = duplicate
        ? state.orderItems
        : [...state.orderItems, orderItem];
      let total = 0;
      for (let order of newOrderItems) {
        total = total + order.qty * Number(order.menu.menuPrice);
      }
      return {
        // ...transactionInitialState,
        ...state,
        orderItems: newOrderItems,
        total: total,
      };
    case TRANSACTION_ACTION_TYPE.CLEAR_ORDER:
      return {
        // ...transactionInitialState,
        ...state,
        orderItems: [],
        total: 0,
      };
    case TRANSACTION_ACTION_TYPE.CATALOGUE_ORDER:
      return {
        // ...transactionInitialState,
        ...state,
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

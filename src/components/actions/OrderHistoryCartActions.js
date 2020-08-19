import {ADD_TO_ORDER_HISTORY,CLEAR_MY_ORDERS} from "./ActionTypes"

export const addToOrderHistory=(pet)=>{
  console.log('in action',pet);
  return {
    type:ADD_TO_ORDER_HISTORY,
    payload:pet

  }
}

  export const clearMyOrders=()=>{
    console.log('in action');
    return {
      type:CLEAR_MY_ORDERS,
    }
}
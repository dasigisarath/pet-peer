import {ADD_TO_ORDER_HISTORY,CLEAR_MY_ORDERS} from "../actions/ActionTypes"

export const OrderHistoryReducer=(state=[],action)=>{
  console.log('inside reducer',action);
  switch (action.type){
    case ADD_TO_ORDER_HISTORY:
      return[...state,action.payload];
      case CLEAR_MY_ORDERS:
        return [];
      default:return state;
  }
}
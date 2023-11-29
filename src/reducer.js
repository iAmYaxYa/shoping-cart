import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_DATA,
  } from "./actions";

const reducer = (state, action)=>{
    if (action.type === CLEAR_CART) {
        return {...state, carts:[]}
    }
    if (action.type === REMOVE) {
        const newItems = new Map(state.carts);
        const itemId = action.payload.id;
        newItems.delete(itemId);
        return {...state, carts:newItems}
    }
    if (action.type === INCREASE) {
        const newItems = new Map(state.carts);
        const itemId = action.payload.id;
        const item = newItems.get(itemId);
        const newItem = {...item, amount: item.amount + 1};
        newItems.set(itemId, newItem)
        return {...state, carts:newItems}
    }
    if (action.type === DECREASE) {
        const newItems = new Map(state.carts);
        const itemId = action.payload.id;
        const item = newItems.get(itemId);
        if (item.amount === 1) {
            newItems.delete(itemId);
            return {...state, carts:newItems}
        }
        const newItem = {...item, amount: item.amount - 1};
        newItems.set(itemId, newItem)
        return {...state, carts:newItems}
    }
    if (action.type === LOADING) {
        return {...state, loading:true};
    }
    if (action.type === DISPLAY_DATA) {
        const newCarts = new Map(action.payload.carts.map((cart)=>[cart.id, cart]));
        return {...state, loading:false, carts:newCarts};
    }

    throw new Error('action not matching')
}

export default reducer;
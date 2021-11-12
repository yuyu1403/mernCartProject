import * as actionTypes from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [] }, action) => {
    // const by default takes a state and an action
    switch(action.type){   // check the actions by types 
        
    case actionTypes.ADD_TO_CART: // in case action types is ADD_TO_CART...
        
        const item = action.payload 

        const existItem = state.cartItems.find((x) => x.product === item.product)
        // check if the item already is in the cart by it's id
        if(existItem) {
            return {
                ...state, //spread the state of our cart
                cartItems: state.cartItems.map((x) => x.product === existItem.product ? item: x)
                // set to new array and go through old array by mapping each item and check if it is 
                //equal to the existItem.product . If true we set it equal to new item, else we set it
                //to current item it is mapping through
            }
        } else {
            return{
                ...state,
                cartItems: [...state.cartItems, item]
                //spread state and push item to arrray
            }
        }
    case actionTypes.REMOVE_FROM_CART:
        return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.product !== action.payload)
        }


    default: //if the action type is none those above, just return state        
        return state
    }
}
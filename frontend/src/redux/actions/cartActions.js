//here we will make our http requests to our backend to get product details
//add it to the cart.

import * as actionTypes from "../constants/cartConstants"
import axios from 'axios' //for ajax requests

export const addToCart = (id,qty) => async (dispatch, getState) => {
// addToCart function will take 2 arguments: product id & qty and will return
//async function which as access to the dispatch function (use of Redux Thunk)
    const { data } = await axios.get(`/api/products/${id}`)
    //destructure the data out of our axios request

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {     //in the reducer we expect the item = object
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    })
    localStorage.setItem('cart', JSON.stringify(getState().cartItems))
    //after dispatch we need to save it to localStorage -->JSON.stringify
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    //update localStorage
    }


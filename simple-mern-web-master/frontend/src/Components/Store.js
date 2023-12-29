import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState={
    cart: {
     
        shippingAddress: localStorage.getItem('shippingAddress')?
        JSON.parse(localStorage.getItem('shippingAddress')): {},
       
        paymentMethod: localStorage.getItem('paymentMethod')?
        localStorage.getItem('paymentMethod'): ' ',
       
        cartItems: localStorage.getItem('cartItems') ? 
        JSON.parse(localStorage.getItem('cartItems')) : [],
    },
};
function reducer(state, action){
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find( (x)=> x._id === newItem._id);
            const cartItems = existItem ? state.cart.cartItems.map( (item)=> item._id === existItem._id ? newItem : item) : 
            [...state.cart.cartItems, newItem]; 
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return {...state, cart: {...state.cart, cartItems}}
            case 'CART_ITEM_REMOVE':{
                const cartItems =state.cart.cartItems.filter( (x)=> x._id !== action.payload._id);
            localStorage.removeItem('cartItems', JSON.stringify(cartItems));
                return { ...state, cart: { ...state.cart, cartItems}} 
            }
            case 'CART_CLEAR': 
            return { ...state, cart: {...state.cart, cartItems: []}}
            case 'SAVE_SHIPPING_ADDRESS': 
            return {
                ...state, 
                cart: {
                    ...state.cart,
                    shippingAddress: action.payload,
                },
            };
            case 'SAVE_PAYMENT_METHOD': 
            return {
                ...state, 
                cart: {
                    ...state.cart,
                    paymentMethod: action.payload,
                },
            };
            default:    
            return state;
    }
}


export function StoreProvider(props){
    const [state, dispatch]= useReducer(reducer, initialState);
    const value ={ state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
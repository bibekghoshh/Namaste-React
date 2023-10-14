import {configureStore} from '@reduxjs/toolkit';
import CartReducer from '../redux/CartSlice';

const appStore=configureStore({
    reducer:{
        cart: CartReducer,
    },
});

export default appStore;
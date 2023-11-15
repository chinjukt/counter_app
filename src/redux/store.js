import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    reducer:{
        //reducer is comming from counterSlice since we are export reducer as export default
        counter:counterSlice
    }
})
import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"counterApp",
    initialState:{
        value:0 //initial state and its value value
    },
    reducers:{
        //actions are created inside this reducers key
        //logics to update states

        //function to increment number
        increment:(state,action)=>{
            //if it is a argument function it can only be accessed by action.payload
            state.value +=action.payload
        },

        //function to increment number
        decrement:(state,action)=>{
            state.value -=action.payload
        },

        //function to reset number
        reset:(state)=>{
            state.value = 0
        }
    }
})

//actions is required by component iorder to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is require to store to change the state value
export default counterSlice.reducer
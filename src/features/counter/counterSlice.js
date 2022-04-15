import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count: 0,
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    
    //inside reducers we can define actions to be performed
    reducers:{
        increment: (state)=>{
            state.count+=1
        },
        decrement: (state)=>{
            state.count-=1
        },
        reset: (state)=>{
            state.count=0
        },
        increamentByAmount: (state,action)=>{
            state.count+=action.payload
        }

    }
})

//export both actions and reducer
//
export const {increment,decrement,reset,increamentByAmount}=counterSlice.actions; //actions

export default counterSlice.reducer   //reducer
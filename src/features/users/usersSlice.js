//Task kon user kon post korsey seita dekhano
import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0',name:'Neil'},
    {id:'1',name:'Neil o brain'},
    {id:'2',name:'Neil kamal'},
]

const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers= (state)=>state.users 

export default usersSlice.reducer
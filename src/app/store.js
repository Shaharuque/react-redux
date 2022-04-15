// added reducer to store

import { configureStore } from "@reduxjs/toolkit";

//importing reducer
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

export const store=configureStore({
    //sobgula reducer aikhaney thakbey
    reducer:{
        counter:counterReducer,
        posts:postsReducer,
        users: usersReducer,
    }
})
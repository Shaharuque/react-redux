//creating reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'


const initialState=[
    {id:'1',title: 'Learning Redux ToolKit', content:'I have heard good things',date:sub(new Date(), {minutes: 10}).toISOString(),
    reactions : {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
},
    {id:'2', title:'slices....',content:'The more i say slice, the more i want pizza',date:sub(new Date(), {minutes: 5}).toISOString(),
    reactions : {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
}
]

const postsSlice=createSlice({
    name:'posts',
    initialState,
    //inside reducers we can define actions to be performed
    reducers:{
        // postAdded(state,action){
        //     state.push(action.payload) //inside createSlice() we can use push method but otherwise we have to use spread operator to create new array to avoid mutability problem
        // }
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId){  //AddForm component thekey title ar content ar basis a payload create korey seita push ar jnno pathano hocchey //here used userId to determine the post giver,user  id pabo users feature thekey
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reactions : {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }   
                }
            }
        },
        reactionAdded(state,action){
            const {postId,reaction}=action.payload
            const existingPost=state.find(post=>post.id===postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts=(state)=>state.posts

export const {postAdded,reactionAdded}=postsSlice.actions; 
export default postsSlice.reducer
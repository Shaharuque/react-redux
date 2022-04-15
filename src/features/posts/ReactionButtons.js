import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({post}) => {
    const dispatch=useDispatch()

    const reactionbuttons=Object.entries(reactionEmoji).map(([name,emoji])=>{
        return (
            <button
                key={name}
                type='button'
                onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
        })
    


    return (
        <div>
            {reactionbuttons}
        </div>
    );
};

export default ReactionButtons;
//component to render posts

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const Posts = () => {
  //const posts=useSelector(state=>state.posts) //posts will have data

  //useSelector diye sob gula post ar data get kortese
  const posts = useSelector(selectAllPosts);
  console.log(posts);

  //RECENT POST DATE WISE AGEY DEKHANOR JNNO
  const orderPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

  //important
  const renderedPosts = orderPosts.map((post) => {    //posts map na korey orderPosts map hobey to show recent post at upper
    return (
      <div
        style={{ border: "2px solid green", margin: "10px 100px",borderRadius:'20px',padding:'15px' }}
        key={post.id}
      >
        <h2>{post.title}</h2>
        <p>{post.content.substring(0, 100)}</p>
        <div>
            <p><PostAuthor userId={post.userId}></PostAuthor></p>
            <p><TimeAgo timestamp={post.date}></TimeAgo></p>
        </div>
        <ReactionButtons post={post}></ReactionButtons>
      </div>
      
    );
  });

  return (
    <div>
      <h1>Posts:</h1>
      {renderedPosts}
    </div>
  );
};

export default Posts;

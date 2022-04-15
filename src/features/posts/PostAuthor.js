import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log(users)
  const author = users.find((user) => user.id === userId);
  return <span>{author ? author.name : 'Unknown Author'}</span>;
};

export default PostAuthor;

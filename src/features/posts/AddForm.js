//component to create new post
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  //getting users
  const users = useSelector(selectAllUsers);
  console.log(users);

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const savePostClicked = () => {
    if (title && content) {
      dispatch(
        // postAdded({
        //   id: nanoid(),
        //   title,
        //   content,
        // })
        postAdded(title, content, userId) //postAdded action called, just sending raw data to the reducer
      );
      //savePostClicked btn click kroar por payload hisabey input ekbar pathanor por next input pathanor agey title and content state empty korey newa holo
      setTitle("");
      setContent("");
      setUserId(" ");
    }
  };

  const usersOptions = users.map((user) => {
    <option key={user.id} value={user.id}>
      {user.name}
    </option>;
  });

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div style={{ marginBottom: "60px", padding: "5px" }}>
      <h4>Add New post</h4>
      <form>
        <div>
          <label style={{ marginRight: "10px" }}>Post Title: </label>
          <input
            id="postTitle"
            name="postTitle"
            type="text"
            onChange={onTitleChanged}
            value={title}
          />
        </div>

        <div>
          <label style={{ marginRight: "10px" }}>Post Author:</label>
          <input
            id="postAuthor"
            type="text"
            onChange={onAuthorChanged}
            value={userId}
          />
          <select>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={{ marginRight: "10px" }}>Post Content</label>
          <input
            id="postContent"
            name="postContent"
            type="text"
            onChange={onContentChanged}
            value={content}
          />
        </div>

        <button
          style={{ marginTop: "20px" }}
          onClick={savePostClicked}
          disabled={!canSave} //true false toggle hoitesey
          type="button"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddForm;

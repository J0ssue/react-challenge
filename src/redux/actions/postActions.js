import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

export const createPost = (postData) => async (dispatch) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data: postData,
    }
  );

  dispatch({
    type: NEW_POST,
    payload: {
      id: data.id,
      title: data.data.title,
      body: data.data.body,
    },
  });
};

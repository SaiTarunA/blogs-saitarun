import axios from "axios";
import { homePage as homePageActionTypes } from "./actionTypes.js";
import { NetworkingUtil } from "../NetworkUtil.js";

export const fetchAllBlogs = () => {
  return (dispatch) => {
    dispatch(homePageAllBlogsLoading());
    const url = NetworkingUtil("allBlogs");
    axios
      .get(url)
      .then((response) => {
        dispatch(homePageAllBlogsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(homePageAllBlogsFailure(error));
      });
  };
};

const homePageAllBlogsLoading = () => {
  return {
    type: homePageActionTypes.type[homePageActionTypes.FETCH_ALL_BLOGS_LOADING],
  };
};

const homePageAllBlogsSuccess = (allBlogs) => {
  return {
    type: homePageActionTypes.type[homePageActionTypes.FETCH_ALL_BLOGS_SUCCESS],
    allBlogs: allBlogs,
  };
};

const homePageAllBlogsFailure = (error) => {
  return {
    type: homePageActionTypes.type[homePageActionTypes.FETCH_ALL_BLOGS_FAILURE],
    error: error,
  };
};

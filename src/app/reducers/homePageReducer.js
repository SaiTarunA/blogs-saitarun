import { homePage as homePageActionTypes } from "../actions/actionTypes.js";
import { updateObject } from "../utility";

const initialState = {
  allBlogs: {},
  loading: {
    allBlogs: false,
  },
};

export const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homePageActionTypes.type[homePageActionTypes.FETCH_ALL_BLOGS_LOADING]:
      return updateObject(state, {
        loading: { ...state.loading, allBlogs: true },
        allBlogs: initialState.allBlogs,
      });
    case homePageActionTypes.type[homePageActionTypes.FETCH_ALL_BLOGS_SUCCESS]:
      return updateObject(state, {
        allBlogs: action.allBlogs,
        loading: { ...state.loading, allBlogs: false },
      });
    case homePageActionTypes.type[homePageActionTypes.FETCH_ALL_BLOGS_FAILURE]:
      return updateObject(state, {
        allBlogs: initialState.allBlogs,
        loading: { ...state.loading, allBlogs: false },
      });
    default:
      return state;
  }
};

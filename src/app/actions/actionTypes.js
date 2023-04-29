export const common = {
  THEME_MODE_TOGGLE: 1,
  THEME_MODE_CHANGE: 2,
  type: {
    1: "THEME_MODE_TOGGLE",
    2: "THEME_MODE_CHANGE",
  },
};

Object.freeze(common);

export const homePage = {
  FETCH_ALL_BLOGS_LOADING: 1,
  FETCH_ALL_BLOGS_SUCCESS: 2,
  FETCH_ALL_BLOGS_FAILURE: 3,
  type: {
    1: "FETCH_ALL_BLOGS_LOADING",
    2: "FETCH_ALL_BLOGS_SUCCESS",
    3: "FETCH_ALL_BLOGS_FAILURE",
  },
};

Object.freeze(homePage);

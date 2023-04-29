const API =
  "https://blogs-4b134-default-rtdb.asia-southeast1.firebasedatabase.app";

export const NetworkingUtil = (endpoint, params) => {
  if (params && Object.keys(params).length) {
    let paramsString = "/?";
    paramsString =
      paramsString +
      Object.keys(params)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&");
    return API + Endpoints[endpoint] + paramsString;
  }
  return API + Endpoints[endpoint];
};

const Endpoints = {
  allBlogs: "/blogs.json",
};

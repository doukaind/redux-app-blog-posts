import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch: any) => {
  // Bad approach!
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};

export const selectPost = () => {
  return {
    type: "SELECT_POST",
  };
};
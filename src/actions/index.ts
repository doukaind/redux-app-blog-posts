import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers =
  () => async (dispatch: any, getState: any) => {
    // console.log(dispatch);
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    console.log("USER IDS: ", userIds);
    userIds.forEach((id) => dispatch(fetchUser(id))); // we don't have to put here await keyword, because we don't have other code
  };

export const fetchPosts = () => async (dispatch: any) => {
  // Bad approach!
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id: string | number) => async (dispatch: any) =>
//   _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id: string | number) => async (dispatch: any) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

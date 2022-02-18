const postReducer = (state: any = [], action: any) => {
  //   // bad
  //   return document.querySelector("input");

  //   //bad
  //   return axios.get("/posts");
  // good

  // we dont want to:
  // state[0]

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
export default postReducer;

import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostList extends React.Component<any> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { posts: state.post };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);

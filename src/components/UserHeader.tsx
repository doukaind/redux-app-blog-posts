import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component<any> {
  //   componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  //   }
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>...Loading</div>;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.users.find((user: any) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);

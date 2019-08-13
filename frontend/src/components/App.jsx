import React from "react";
import { connect } from "react-redux";

import CreateUser from "./CreateUser.jsx";
import CreateGroup from "./CreateGroup.jsx";
import GroupList from "./GroupList.jsx";
import UserList from "./UserList.jsx";

class App extends React.Component {
  render = () => {
    return (
      <>
        <div>
          <CreateUser />
          <UserList />
          <CreateGroup />
          <GroupList />
        </div>
      </>
    );
  };
}
let mapStateToProps = state => {
  return {};
};
export default App;

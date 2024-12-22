// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent  Component Did Mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
        LoggedIn User
        <UserContext.Consumer>
          { ({loggedInUser})=><h1 className="text-xl  font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>

        </div>
        <h2>This is Namaste React Web Series.</h2>
        {/* <User name={"Jatin Agrawal(function)"} /> */}
        <UserClass name={"first(class)"} />
      </div>
    );
  }
}

export default About;

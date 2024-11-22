import React from "react";
//class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummy name",
        id: "default",
      },
    };
    // console.log(props);
    // console.log("Child Constructor");
  }
  async componentDidMount() {
    // console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/jatinag17");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { login, id } = this.state.userInfo;
    // const { name } = this.props;
    // const { count } = this.state;

    //   console.log("Child Render");
    return (
      <div className="user-card">
        <h2>Name:{login}</h2>
        <h3>id:{id}</h3>
        <h4>contact:XXXXXXXX</h4>
      </div>
    );
  }
}
export default UserClass;

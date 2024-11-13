import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }
   
render(){
  console.log("Parent render");
  return(
   <div>
      <h1>About Class Component</h1>
      <h2>This is Namaste React Web Series.</h2>
      {/* <User name={"Jatin Agrawal(function)"} /> */}
      <UserClass name={"Jatin Agrawal(class)"} />
    </div>
  );
}
}


export default About;

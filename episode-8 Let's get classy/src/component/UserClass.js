import React from "react";
//class based component
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            count2:50,
        };
        // console.log(props);
    }
render()
{
    const{name}=this.props;
    const{count,count2}=this.state;
        return(
      <div className="user-card">
         <h1>Count: {count}</h1>
         <h1>Count2: {count2}</h1>

        <h2>Name:{name}</h2>
        <h3>Location:Mathura</h3>
        <h4>contact:XXXXXXXX</h4>
      </div>
    );
}
}
export default UserClass;
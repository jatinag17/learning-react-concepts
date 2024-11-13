import React from "react";
//class based component
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(props);
    }
render()
{
    return(<div className="user-card">
        <h2>Name:{this.props.name}</h2>
        <h3>Location:Mathura</h3>
        <h4>contact:XXXXXXXX</h4>
        </div>
    );
}
}
export default UserClass;
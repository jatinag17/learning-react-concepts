import { useEffect, useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  

  useEffect(() => {
    //Api calls
  }, []);
  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      <h2>Name:{props.name}</h2>
      <h3>Location:Mathura</h3>
      <h4>contact:XXXXXXXX</h4>
    </div>
  );
};
export default User;

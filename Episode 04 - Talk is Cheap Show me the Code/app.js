import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>title tag</h1>;

// const data = api.getData(); // cross site scripting


const HeadingComponent = () => (
  <div id="container">
    {<Title/>}
    <h1 className="heading">namaste react Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

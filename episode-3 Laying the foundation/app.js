import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

const Title=()=>
(
  <h1>title tag</h1>
);





// jsx (transpiled before it reaches the js)--PARCEL-Babel
// jsx =>React.createElement=>ReactElement- JS Object=>HTMLElement(render)
// babel used to convert jsx to React.createElement 
//Babel is a JS Compiler
// babel is a transpiler(source code to another source code )
// const jsxheading =<h1 id="heading">Namaste react using jsx </h1>







// React Component
// class-Based Component =>old
// Funtional Component =>is a normal JS function 

const data =api.getData(); // cross site scripting
const HeadingComponent = ()=>
(
  <div id="container">
    {<Title/>  /*this a component compositon means component within the component */
    }
    <h2>{data}</h2>
 <h1 className="heading">namaste react Functional component</h1>
  </div>
);
// above code is witten like this also
// const heading=return <h1>namaste react</h1> 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 

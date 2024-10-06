// const heading = React.createElement('h1', {id:'heading'}, "Hello World from React");
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);
// const heading = React.createElement('h1', {id:"heading"}, "Hello World from React");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);
        /* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */
//made the above pattern using react
// const parent = React.createElement("div", { id: "parent" }, 
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// jsx (transpiled before it reaches the js)--PARCEL-Babel
// jsx =>React.createElement=>ReactElement- JS Object=>HTMLElement(render)
// babel used to convert jsx to React.createElement 
//Babel is a JS Compiler
// babel is a transpiler(source code to another source code )

const jsxheading =<h1 id="heading">Namaste react using jsx </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); 

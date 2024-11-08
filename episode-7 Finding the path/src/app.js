import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/**if path=/ */}
      <Body />
      {/**if path=/about */}
      <About/>
      {/**if path=/contact */}
      <Contact/>

    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
    {
      path: "/about",
      element: <About />,
    },
    {
      path:"/contact", 
      element:<Contact/>,
    },
    ],
      errorElement:<Error/>,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);
  
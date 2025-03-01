import React from "react";
import Login from "./pages/auth/Login"
import Home from "./pages/Home"
import Template from "./pages/Template";
import About from "./pages/About"
const App = () => {
  return <>
    <Home/>
    <Login/>
    <Template/>
    <About/>
  </>;
};

export default App;

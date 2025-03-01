import React from "react";
import Login from "./pages/auth/Login"
import Home from "./pages/Home"
import CardComponent from "./components/Card/CardComponent";
import Template from "./pages/Template";
const App = () => {
  return <>
    <Home/>
    <Login/>
    <CardComponent/>
    <Template/>
  </>;
};

export default App;

import React from "react";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import { Card } from "flowbite-react";
import Login from "./pages/auth/Login";
const App = () => {
  return (
  <div className="flex justify-center items-center h-screen">
    <Login/>
  </div>
 
  );
};

export default App;

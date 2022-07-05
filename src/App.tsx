import React from "react";
import Router from "./router";
import "./App.css";

export const App = () =>  {

  return (
    <div className="container">
      
      <div className="logo">
        <img src={require("./assets/logo.png")} alt="Logo RaM"/>
      </div>
      
      <div className="content">
        <Router />
      </div>
    
    </div>
  );
}

export default App;

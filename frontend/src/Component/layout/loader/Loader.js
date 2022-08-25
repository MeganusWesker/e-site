import React from "react";
import "./Loader.css";
import Walk from "../../../images/Walk.gif"

const Loader = () => {
  return (
    <div className="loading">
       <img  className="loader-img"src ={Walk} alt ="Loading..." /> 

    </div>

  );
};

export default Loader;


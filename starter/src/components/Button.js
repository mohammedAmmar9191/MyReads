import React, {useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchPage from "./SearchPage";


 const Button=()=> {

  return (
    <div className="open-search">
           <Link to="/search">add a Book</Link> 
          </div>
  );
};


export default Button;
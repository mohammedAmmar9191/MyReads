import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


 const Button=()=> {

  return (
    <div className="open-search">
            <Link to=" /SearchPage"> Add a book </Link>
            
          </div>
  );
};


export default Button;
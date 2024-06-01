import React from "react";
import { Link } from "react-router-dom";

export const AuthLayout = (props) => {
  const { children, title,type } = props;
  return (
    <>
      <form id="form" className="mx-auto mt-5">
      <p id="title">{title} </p>
    <p id="message">Signup now and get full access to our app. </p>
   {children}

      </form>
    
    </>
  );
};

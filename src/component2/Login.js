import React from "react";
import Input from "./Input";

function Login(props){
    return (
        <form className="form-page">
          <Input title="title" place="enter your name" />
          <Input title="password" place="enter password" />
           {!props.isRegistered && <Input title="password" place="confirm pasworrd"/>} 
          <button type="submit">Lgin</button>
        </form>
     );
}
export default Login;
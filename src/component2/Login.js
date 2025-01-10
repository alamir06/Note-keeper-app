import React from "react";


var isLogin=true;

function condiotionTest()
{
    if(isLogin)
    {
        return  <h1>Hello</h1>;
    }
    else {
       return (
        <div>
        <form className="form-page">
      <input type="text" placeholder="Enter username"/><br /><br />
      <input type="text" placeholder="Enter password" /><br /><br />
      <button type="submit">Register</button>
      </form>
        </div>
        );
    }
}

function Login(){
    return (
     <div className="container">
      {condiotionTest()}
     </div>
     );
}
export default Login;
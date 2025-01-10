import React from "react";
import Login from "./Login";


var isLogin=false;

function App1()
{
    return (
        <div className="login">
          <div className="container">
          <Login 
            isRegistered={isLogin}
          />
          </div>
        </div>
    );

}

export default App1;
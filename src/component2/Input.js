import React from "react";


function Input(props)
{
    return (
    <div>
         <input type={props.title} placeholder={props.place} />
    </div>
    );
}
export default Input;
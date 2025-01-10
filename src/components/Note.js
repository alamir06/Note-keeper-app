import React from "react";

function Note(props)
{
    return (
    <div className="notes">
        <h2>Name:{props.titel}</h2>
        <p>phone:{props.tel}</p>
        <p>email:{props.email}</p>
    </div>
    );
}

export default Note;
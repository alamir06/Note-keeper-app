import React from "react";  
import Note from "./Note";
import notes from "../notes";
import Header from "./Header";



function App() {
  return (
  <div>
  <Header />
 <div className="note">
  {notes.map((singleItem)=><Note titel={singleItem.name} tel={singleItem.tel} email={singleItem.email} />) }
  </div>
  </div>
  );
}

export default App;

import React from "react";
import Post from "./Components/post";
import goldy from "./images/goldy.webp";
import lechess from "./images/lechess.jpg";
import './App.css';

function App() {


  return (
    <div className="Post">
     <h1>MINI IMAGE FEED</h1>
      <Post image={goldy} name="happy dog" />
      <Post image={lechess} name="fav dessert" />
      o 
      

    </div>
  );
}

export default App;
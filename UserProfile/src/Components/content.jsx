import React from "react";
import details from "../data.js";
import { useParams,Link } from "react-router-dom";

function Content() {
  const {id} = useParams();
  const currStud = details.find((item) => item.id === Number(id));
  if (!currStud) {
    return (
      <>
        <h1 className="error">Profile Not Found!</h1>
        <Link to="/" className="backLink">⬅️Back to Home</Link>
      </>
    );
  }

  return(
  <div className="profileCard">
    <h1 className="name">{currStud.name}</h1>
    <h4 className="about">{currStud.about}</h4>
    <p className="para">Email:{currStud.email}</p>
    <p className="para">Age:{currStud.age}</p>
    <p className="para">College:{currStud.college}</p>
    <p className="para">Course:{currStud.course}</p>
    <Link to="/" className="backLink">⬅️Back to Profiles</Link>
    </div>);
}

export default Content;
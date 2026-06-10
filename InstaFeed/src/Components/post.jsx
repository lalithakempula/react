import React from "react";
import { useState } from "react";
function Post(props){
    const[photoLike,setphotoLike]=useState(0);
    return(
    <div className="Post">
     <p>{props.name}</p>
     <img src={props.image} alt="Post" width="300"/>
     <button onClick={()=>{setphotoLike(photoLike+1)}}>likeeee({photoLike})</button>
    </div>

    );
}
export default Post;
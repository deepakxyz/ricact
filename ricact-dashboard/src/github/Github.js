import React from 'react';
import './Github.css';
import Data from "./github.json";

function Github(){
    return(
        <div className="Github">
            <img className="git-img" src={Data.img} alt="HeyMe"/>
            <h2 className="git-name">{Data.name}</h2>
            <a href="https://github.com/deepakxyz" target="_">
            <h3 className="git-user-name">{"@" + Data['user-name']}</h3>
            </a>
            <p className="git-email">{Data['email']}</p>
        </div> 
    )
}


export default Github;
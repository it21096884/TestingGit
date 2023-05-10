import React from "react";

export default function Card(props){
    return(
        <div>
            <h2>{props.Title}</h2>
            <img src={props.image}/>
            <p>{props.description}</p>
            <p></p>
        </div>
    )
}
import React from "react";

export default function Testimonial(props){

    return(
        <div>
            <p>{props.quote}</p>
            <h3>{props.name}</h3>
            <img src={props.image}/>
        </div>
    )
}
import React from "react";

export default function Banner(props){

    return(

        <div>
            <img src={props.image} alt="Banner" style={stylefunc}/>
            {props.message}
        </div>
    )
}

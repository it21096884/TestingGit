import React from "react";

export default function Button(props){

    const styleFun={
        backgroundColor:props.color,
        size:props.size
    }

    return (

        <div>
            <button style ={styleFun}>
                {props.name}
            </button>
        </div>
    )
}
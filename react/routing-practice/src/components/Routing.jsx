import React from "react";
import { useParams } from "react-router-dom";
const Routing = () =>{
    const {param, bgColor, color} = useParams();
    return(
        <div>
            {
                isNaN(param)? <h2 style={{backgroundColor: `${bgColor}`, color: `${color}`}}>your word is: {param}</h2>:
                <h2>your number is: {param}</h2>
            }
        </div>

)
    
}

export default Routing;
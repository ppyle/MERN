import React from "react"

const BigInversion = (props) => {
    return(
        <div>
            <h2>{props.personName}</h2>
            <p>{props.personAge}</p>
            <p>{props.hairColor}</p>
        </div>
    )
}

export default BigInversion
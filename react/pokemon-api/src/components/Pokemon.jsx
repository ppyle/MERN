import React, {useState} from "react";
import axios from "axios";

const Pokemon = ()=>{

    let [mons, setMons] = useState([])



    const clickMe = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")

        .then(response => {
            console.log("response from api is: ", response)
            setMons(response.data.results)
        })
        .catch(err=>console.log("something went wrong:", err))
    }

    

    return(
        <div>
            <h1>Pokemans</h1>
            <button onClick={clickMe}>Click me to get pocket monsters!</button>
            <ul>
                {
                mons.map((mon, index)=>{
                    return(
                        <li>{mon.name}</li>
                    )
                })
                }
            </ul>
            
        </div>
        
    )
}

export default Pokemon;
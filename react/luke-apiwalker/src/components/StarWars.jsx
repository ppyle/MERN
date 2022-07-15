import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StarWars = () => {

    const [item, setItem] = useState({});
    const {type, id} = useParams();
    const [er, setEr] = useState(false)


    useEffect(() =>{
        console.log(type, id)
        axios.get(`http://swapi.dev/api/${type}/${id}`)
        .then(response => {
        console.log("response from api is: ", response)
        setItem(response.data)
    })
        .catch(err=>{
            console.log(err)
            return(
                setEr(true)
            )
        })
        
    },[id, type])





    return(
        <div>
            {   er?
                <>
                <h2>these are not the droids you're looking for</h2>
                <img src="https://static.wikia.nocookie.net/disney/images/e/eb/Profile_-_Obi-Wan_Kenobi.jpg/revision/latest?cb=20220611143255" alt="obi wan" />
                </>
            
            :type === "people"?
                <>
                <h2>{item.name}</h2>
                <p>Height: {item.height}</p>
                <p>Mass: {item.mass}</p>
                <p>hair color: {item.hair_color}</p>
                <p>skin color: {item.skin_color}</p>
                </>: type === "planets"?
                <>
                <h2>{type.name}</h2>
                <p>Diameter: {item.diameter}</p>
                <p>climate: {item.climate}</p>
                <p>terrain: {item.terrain}</p>
                <p>population: {item.population}</p>
                </>: type === "films"?
                <>
                <h2>{type.title}</h2>
                <p>director: {item.director}</p>
                <p>producer: {item.producer}</p>
                <p>film number: {item.episode_id}</p>
                <p>release date: {item.release_date}</p>
                </>: type === "starships"?
                <>
                <h2>{type.name}</h2>
                <p>model: {item.model}</p>
                <p>class: {item.starship_class}</p>
                <p>length: {item.length}</p>
                <p>cost: {item.cost_in_credits}</p>
                </>: type === "species"?
                <>
                <h2>{type.name}</h2>
                <p>classification: {item.classification}</p>
                <p>designation: {item.designation}</p>
                <p>homeworld: {item.homeworld}</p>
                <p>language: {item.language}</p>
                </>: type === "vehicles"?
                <>
                <h2>{type.name}</h2>
                <p>model: {item.model}</p>
                <p>class: {item.vehicle_class}</p>
                <p>length: {item.length}</p>
                <p>cost: {item.cost_in_credits}</p>
                </>: null
        
        
        
        
            }
            
        </div>
    )
}

export default StarWars;
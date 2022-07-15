import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import StarWars from "./StarWars";

const Home = () => {
    let [type, setType] = useState("people")
    let [id, setId] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();

        navigate(`/${type}/${id}`)
    }



    return(
        <div>
            <h1>Find some Star Wars Things!</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="type">Search For:</label>
                <select onChange={(e)=>setType(e.target.value)} name="type">
                    <option value="people">people</option>
                    <option value="spaceships">spaceships</option>
                    <option value="vehicles">vehicles</option>
                    <option value="planets">planets</option>
                    <option value="films">films</option>
                    <option value="species">species</option>
                </select>
                <label htmlFor="id">id:</label>
                <input onChange={(e)=>setId(e.target.value)} type="number" name="id"/>
                <input type="submit" value="Search" />
            </form>
        </div>

    )
}

export default Home;
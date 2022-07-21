import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const CreateAuthor = () => {

    const navigate = useNavigate()
    let [formInfo, setFormInfo] = useState({})
    let [errors, setErrors] = useState({})
    
    const cancelhandler = ()=>{
        navigate("/")
    }

    const handleChange = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", formInfo)
        .then(response=>{
            console.log(response)
            if (response.data.error){
                setErrors(response.data.error)
            }
            else{
                navigate('/')
            }
        })
        .catch(err =>{console.log(err)})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>name of author</label>
                <input onChange={handleChange} type="text" name="name"/>
                <input type="submit" value="Add Author" />
                <button onClick={cancelhandler}>Cancel</button>
                <br />
                {errors.message}

            </form>
        </div>
    );
};

export default CreateAuthor;
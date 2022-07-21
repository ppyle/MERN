import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EditAuthor = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response=>{
            console.log(response)
            setAuthor(response.data)
        })
        .catch(err=>{console.log(err)})
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
        .then(response=>{
            console.log(response)
            if(response.data.error){
                setErrors(response.data.error)
            }
            else{
                navigate('/')
            }
            


        })
        .catch(err =>{console.log(err)})
    }


    const handleChange = (e) =>{
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Edit this Author</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input onChange={handleChange} name='name' type="text" value={author.name}/>
            <input type="submit" value="Submit" />
            <br />
            {errors.errors.name.message}
            </form>
        </div>
    );
};


export default EditAuthor;
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';


const AllAuthors = () => {

    const navigate = useNavigate()
    let[authors, setAuthors] = useState([])
    let [change, setChange] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(response=>{
            console.log(response)
            setAuthors(response.data)

        })
        .catch(err =>{console.log(err)})
    },[change])

    const deleteAuthor = (id) =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response=>{
            console.log(response)
            setChange(!change)
        })
        .catch(err=>{console.log(err)})

    }


    return (
        <div>
            <h1>list of favorite authors</h1>
            <h2> <Link to={'/authors/create'}>Add an author</Link> </h2>  
            {
                authors.map((author, i)=>{
                    return(
                        <>
                            <h2>{author.name}</h2>
                            <Link to={`/authors/edit/${author._id}`}>Edit {author.name}</Link>
                            <button onClick={()=>deleteAuthor(author._id)}>Delete {author.name}</button>

                        </>

                    )
                })
            }
        </div>
    );
};



export default AllAuthors;
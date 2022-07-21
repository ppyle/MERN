import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OneProduct = () => {
const [product, setProduct] = useState({});
const navigate = useNavigate()
const {id} = useParams()
    useEffect(() => {
            axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
            console.log(response)
            setProduct(response.data)

            })
            .catch(err=>{console.log(err)})

    }, []);

    const deleteProduct = () =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{console.log(response)})
        .catch(err=>{console.log(err)})
        navigate("/")
    }



    return (
        <div>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
            <Link to={`/products/edit/${product._id}`}>Edit {product.title}</Link>
            <button onClick={deleteProduct}>Delete {product.title}</button>
        </div>
    );
};

export default OneProduct;
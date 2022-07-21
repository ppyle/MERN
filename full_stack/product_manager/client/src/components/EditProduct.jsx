import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            setProduct(response.data)
        })
        .catch(err=>{console.log(err)})

    }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, product)
        .then(response=>{
            console.log(response)
        })
        .catch(err =>{console.log(err)})
    }

    const handleChange = (e) =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input onChange={handleChange} name='title' type="text" value={product.title}/>
            <br />
            <label htmlFor="price">Price</label>
            <input onChange={handleChange} name='price' type="number" value={product.price} />
            <br />
            <label htmlFor="description">Description</label>
            <input onChange={handleChange} name='description' type="text" value={product.description} />
            <br />
            <input type="submit" value="Edit Product" />
        </form>
    </div>
    );
};



export default EditProduct;
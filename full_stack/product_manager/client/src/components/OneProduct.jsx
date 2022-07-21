import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const OneProduct = () => {
const [product, setProduct] = useState({});
const {id} = useParams()

    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(response=>{
        console.log(response)
        setProduct(response.data)

    })
    .catch(err=>{console.log(err)})


    return (
        <div>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
        </div>
    );
};

export default OneProduct;
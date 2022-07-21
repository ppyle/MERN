import axios from 'axios';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';


const AllProducts = () => {

    let[proudcts, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(response=>{
            console.log(response)
            setProducts(response.data)
        })
        .catch(err =>{console.log(err)})
    },[])


    return (
        <div>
            <h1>list of products</h1>
            {
                proudcts.map((product, i)=>{
                    return(
                        <>
                            <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>

                        </>

                    )
                })
            }
        </div>
    );
};



export default AllProducts;
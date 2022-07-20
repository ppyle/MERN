import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


const Form = () => {

    let [formInfo, setFormInfo] = useState({})

    const handleChange = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formInfo)
        .then(response=>{
            console.log(response)
        })
        .catch(err =>{console.log(err)})

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} name='title' type="text" />
                <br />
                <label htmlFor="price">Price</label>
                <input onChange={handleChange} name='price' type="number" />
                <br />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} name='description' type="text" />
                <br />
                <input type="submit" value="Make Product" />
            </form>
        </div>
    );
};

Form.propTypes = {};

export default Form;
import React, {useState} from "react";

const FirstForm = (props) => {

let [firstName, setfirstName] = useState("");
let [lastName, setlastName] = useState("");
let [email, setemail] = useState("");
let [password, setpassword] = useState("");
let [confirmpassword, setconfirmpassword] = useState("");


    return(
        <div>
            <form action="#">
                <label htmlFor="firstName"> First Name: </label>
            <input onChange={(e)=> setfirstName(e.target.value)} type="text" name="firstName"/> <br />

            <label htmlFor="lastName">Last Name: </label>
            <input onChange={(e)=> setlastName(e.target.value)} type="text" name="lastName"/> <br />

            <label htmlFor="email"> Email: </label>
            <input onChange={(e)=> setemail(e.target.value)} type="email" name="email"/>  <br />

            <label htmlFor="password"> Password: </label>
            <input onChange={(e)=> setpassword(e.target.value)} type="password" name="password"/> <br />

            <label htmlFor="password"> Confirm Password: </label>
            <input onChange={(e)=> setconfirmpassword(e.target.value)} type="password" name="password"/> <br />

            </form>
            
            -------Your Form Data---------

            <p>first name:  {firstName}</p>
            <p>last name: {lastName} </p>
            <p>email: {email} </p>
            <p>password: {password} </p>
            <p>confirm password: {confirmpassword} </p>
        </div>

    )

}


export default FirstForm
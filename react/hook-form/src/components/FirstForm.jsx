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
            {
                firstName.length < 3 ? <p>First name must be longer than 3 characters</p> :
                null
            }

            <label htmlFor="lastName">Last Name: </label>
            <input onChange={(e)=> setlastName(e.target.value)} type="text" name="lastName"/> <br />

            {
                lastName.length < 3 ? <p>last name must be longer than 3 characters</p> :
                null
            }

            <label htmlFor="email"> Email: </label>
            <input onChange={(e)=> setemail(e.target.value)} type="email" name="email"/>  <br />

            {
                email.length < 5 ? <p>email must be longer than 5 characters</p> :
                null]
            }

            <label htmlFor="password"> Password: </label>
            <input onChange={(e)=> setpassword(e.target.value)} type="password" name="password"/> <br />

            {
                password.length < 8 ? <p>First name must be longer than 8 characters</p> :
                null
            }

            <label htmlFor="password"> Confirm Password: </label>
            <input onChange={(e)=> setconfirmpassword(e.target.value)} type="password" name="password"/> <br />

            {
                password != confirmpassword ? <p>Passwords must match to submit</p> :
                null
            }

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
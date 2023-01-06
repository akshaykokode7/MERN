import React from 'react';
import { useState } from 'react';
import "./register.css";
import axios from 'axios';

const Register = () => {

    const [ user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && ( password === reEnterPassword ) ){
            axios.post("https://akshaykokode7-solid-guide-45wr76p7q5rh5qq5-9002.preview.app.github.dev/register", user)
            .then( res => console.log(res))
        } else {
            alert("invalid input")
        }
    }

    return (
        <div className='register'>
            {console.log("user", user)}
            <h1>Register</h1>
            <input type='text' name="name" 
            value={user.name} placeholder='Your Name' onChange={ handleChange }></input>
            <input type='text' name="email" 
            value={user.email} placeholder='Your Email' onChange={ handleChange }></input>
            <input type='password' name="password" 
            value={user.password} placeholder='Your Password' onChange={ handleChange }></input>
            <input type='password' name="reEnterPassword" 
            value={user.reEnterPassword} placeholder='Re-enter Password' onChange={ handleChange }></input>
            <div className='button' onClick={register} >Register</div>
            <div>or</div>
            <div className='button'>Login</div>

        </div>
    )
}

export default Register
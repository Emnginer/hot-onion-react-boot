import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import {
    getAuth,
    signInWithEmailAndPassword

} from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from '../../App';
import NavBar from '../NavBar/NavBar';


const app = initializeApp(firebaseConfig);


const Login = (props) => {
    
    const cart = props.cart;
    const [users, setUsers] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        confirmPassword: '',
        success: '',
        error: '',
        passwordError: ''
    });

    const [logInUser, setLogInUser] = useContext(userContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        if (users.email && users.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, users.email, users.password)
                .then((res) => {
                    const newUser = { ...users }
                    newUser.success = "user login successfully";
                    newUser.error = '';
                    newUser.passwordError = '';
                    setUsers(newUser);
                    setLogInUser(newUser);
                    navigate(from, { replace: true });
                    console.log(res.user)
                })
                .catch((error) => {
                    const newUser = { ...users }
                    newUser.error = error.message;
                    newUser.error = error.code;
                    newUser.success = '';
                    newUser.passwordError = '';
                    setUsers(newUser);
                    setLogInUser(newUser);
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // console.log(errorCode, errorMessage);
                });
        }
        else {
            const newUser = { ...users };
            newUser.passwordError = "password does not match!!";
            newUser.error = '';
            newUser.success = '';
            setUsers(newUser);
            console.log("password not matched")
        }
        event.preventDefault();
    }

    const handleChange = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
            // console.log(isFormValid);
        }
        if (event.target.name === 'password') {
            isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event.target.value);
            // console.log(isFormValid);
        }
        if (event.target.name === 'confirmPassword') {
            isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event.target.value);
            // console.log(isFormValid);
        }
        if (isFormValid) {
            const newUser = { ...users }
            newUser[event.target.name] = event.target.value;
            setUsers(newUser);
            // console.log(newUser);
        }

    };




    return (

        <div>
           <NavBar cart={cart}></NavBar>

            <div className='App' style={{ margin: '50px auto' }}>
                <h2>this is the login</h2>

                <form onSubmit={handleSubmit}>

                    <input type="text" name='email' onBlur={handleChange} placeholder='Email' required /> <br />
                    <input type="password" name='password' onBlur={handleChange} placeholder='Password' required /> <br />
                    <input type="submit" value="login" />


                    <Link to="/signUp"><p>create an account ?</p></Link>

                </form>

                <p style={{ color: 'red' }}>{users.error}</p>
                <p style={{ color: 'green' }}>{users.success}</p>
                <p style={{ color: 'red' }}>{users.passwordError}</p>

            </div>
        </div>

    );
};

export default Login;
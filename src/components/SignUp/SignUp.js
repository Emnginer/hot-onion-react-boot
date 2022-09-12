import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile

} from "firebase/auth";
import logo from '../../images/logo2.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../App';
import NavBar from '../NavBar/NavBar';

const app = initializeApp(firebaseConfig);

const SignUp = (props) => {
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

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

const [logInUser, setLogInUser] = useContext(userContext);

  const handleSubmit = (event) => {
        if (users.email && users.password) {
            if (users.password === users.confirmPassword) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, users.email, users.password)
                    .then((userCredential) => {
                        console.log(userCredential);
                        const newUser = { ...users }
                        newUser.success = "user created successfully";
                        newUser.error = '';
                        newUser.passwordError = '';
                        updateUserName(users.name) 
                        setUsers(newUser);
                        setLogInUser(newUser);
                        navigate(from, { replace: true });
                        
                    })
                    .catch((error) => {
                        const newUser = { ...users }
                        newUser.error = error.message;
                        newUser.success = '';
                        newUser.passwordError = '';
                        setUsers(newUser);
                        setLogInUser(newUser);
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            }
            else {
                const newUser = { ...users };
                newUser.passwordError = "password does not match!!";
                newUser.error = '';
                newUser.success = '';
                setUsers(newUser);
                setLogInUser(newUser);
                console.log("password not matched")
            }



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


    const updateUserName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          console.log('user name updated successfully');
        }).catch((error) => {
          // An error occurred
          // ...
        }); 
    }


    return (

        <div>
            <NavBar cart={cart}></NavBar>

            <div className='App' style={{ margin: '50px auto' }}>
                <h2>this is the login</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' onBlur={handleChange} placeholder='your name' required /> <br />
                    <input type="text" name='email' onBlur={handleChange} placeholder='Email' required /> <br />
                    <input type="password" name='password' onBlur={handleChange} placeholder='Password' required /> <br />
                    <input type="password" name='confirmPassword' onBlur={handleChange} placeholder='Confirm Password' required /> <br />
                    <input type="submit" value="Sign Up" />


                    <Link to="/login"><p>already have an account ?</p></Link>

                </form>

                <p style={{ color: 'red' }}>{users.error}</p>
                <p style={{ color: 'green' }}>{users.success}</p>
                <p style={{ color: 'red' }}>{users.passwordError}</p>

            </div>
        </div>

    );
};

export default SignUp;
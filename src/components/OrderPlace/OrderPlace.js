import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo2.png';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bikeLogo from '../../images/Group 1151.png'
import './OrderPlace.css'

const OrderPlace = (props) => {
    const cart = props.cart
    return (
        <div>
            <div className='container header'>
                <div>
                    <img src={logo} alt="" style={{ width: '200px' }} />
                </div>
                <div className='nav'>
                    <nav>
                        <ul>
                            <Link to="/food/ProceedCart"><FontAwesomeIcon icon={faShoppingCart} /> <sup>{cart?.length}</sup></Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signUp">Sign Up</Link>

                        </ul>
                    </nav>
                </div>
            </div>



            <div className="order-container">
                <div className='order-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8555681358157!2d91.81955831426967!3d22.359081796410308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sGEC%20More%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1662366744965!5m2!1sen!2sbd" style={{ width: "600px", height: "450px", style: "border:0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                </div>
                <div className='order-info'>
                    <div>
                        <img src={bikeLogo} alt="" style={{ width: '100px' }} />
                        <li>your location</li>
                        <span>107 Rd No 8</span>
                        <li>Shop address</li>
                        <span>Gulshan Plaza Restora  (GPR)</span>
                        <h2>9:30</h2>
                        <p>Estimated delivery time</p>
                        <h4>Rasel</h4>

                        <Link to="/rider"><Button variant='danger'>contact</Button></Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderPlace;
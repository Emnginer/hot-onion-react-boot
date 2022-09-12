import React, { useContext, useState } from 'react';
import logo from '../../images/logo2.png'
import banner from '../../images/bannerbackground.png';
import './Header.css'

import NavBar from '../NavBar/NavBar';



const Header = (props) => {
    const cart = props.cart;
    return (
        <div>
            <NavBar cart={cart}></NavBar>

            <div className='header-banner'>
            <div className='banner-content'>
                    <h2>Best food waiting for your belly</h2>
                    <input type="text" placeholder='search food items' />
                    <button>search</button>
            </div>
                <img src={banner} alt="" className='img-fluid' />
                
            </div>

            {/* <div>
                <ul className='food-item'>
                    <li><Link to="/breakfast">breakfast</Link></li>
                    <li><Link to="/lunch">lunch</Link></li>
                    <li><Link to="/dinner">dinner</Link></li>
                </ul>
            </div> */}



        </div>
    );
};

export default Header; 
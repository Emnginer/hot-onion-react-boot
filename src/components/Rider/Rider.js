import React from 'react';
import riderImage from "../../images/GIF/comp_2_2.gif"
import './Rider.css'
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Rider = () => {
    return (
        <div className="rider">
            <Link to="/"><img src={logo} alt="" style={{ width: '200px' }} className='logoImg'/></Link>
            <img src={riderImage} alt="" className='riderImg'/>
        </div>
    );
};

export default Rider;
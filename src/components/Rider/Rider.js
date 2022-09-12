import React from 'react';
import riderImage from "../../images/GIF/comp_2_2.gif"
import './Rider.css'

const Rider = () => {
    return (
        <div className="rider">
            <img src={riderImage} alt="" />
        </div>
    );
};

export default Rider;
import React from "react";
import {Link} from "react-router-dom";

import './FoodItem.css'

const FoodItem = (props) => {
    return (
        <div className="main-wrapper col-md-4 col-sm-6">
            <div className="wrapper">

                <Link to={'/food/' + props.food.name} className='text-decoration-none'>
                    <div className="food-item">
                        <img src={props.food.image.props.src} alt="" style={{ width: '150px',marginBottom:'8px' }} />
                        <h6>{props.food.name}</h6>
                        <p>{props.food.title}</p>
                        <h4>${props.food.price}</h4>
                    </div>
                </Link>



            </div>


        </div>



    );
};

export default FoodItem;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { foodData } from '../../data/fakeData';
import FoodItem from '../FoodItem/FoodItem';
import './Food.css'

const Food = (props) => {
    const [foods, setFoods] = useState(foodData);
    const cart = props.cart;
    const setCart = props.setCart;

    const lunch = () => {
        const lunchFood = foodData.filter(fd => fd.category === "lunch");
        setFoods(lunchFood);
        console.log(lunchFood)
    }

    const breakfast = () => {
        const breakfastFood = foodData.filter(fd => fd.category === "breakfast");
        setFoods(breakfastFood);
        console.log(breakfastFood)
    }

    const dinner = () => {
        const dinnerFood = foodData.filter(fd => fd.category === "dinner");
        setFoods(dinnerFood);
        console.log(dinnerFood)
    }

    return (
        <div style={{marginTop:'50px'}}>
            <ul className='food-nav' style={{marginBottom: '50px'}}>
                    <li onClick={breakfast}><Link to="">Breakfast</Link></li>
                    <li onClick={lunch}><Link to="">Lunch</Link></li>
                    <li onClick={dinner}><Link to="">Dinner</Link></li>
            </ul>



            <div className='container'>
                <div className="row d-flex justify-content-center">
                {
                    foods.map(food => <FoodItem food={food}></FoodItem>)
                }
                </div>
                

               
            

            <div className="text-center">
                {
                    cart.length > 0 ? <Link to="/food/ProceedCart"><button className="btn btn-danger" >Proceed Check Out</button></Link>  :
                    <button className="btn btn-danger" disabled>Proceed Check Out</button>
                }
             
            </div>
            </div>
                
            
        </div>
    );
};

export default Food;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import { foodData } from '../../data/fakeData';
import Header from '../Header/Header';
import ProceedCart from '../ProceedCart/ProceedCart';
import './FoodItemDetails.css'


const FoodItemDetails = (props) => {
    let { foodName } = useParams();

    // const [cart, setCart] = useState([])
    const cart = props.cart;
    const setCart = props.setCart;

    const [fdDetail, setFdDetail] = useState(foodData);

    // const [count, setCount] = useState(1);
    const count = props.count;
    const setCount = props.setCount;

    const increase = () => {
        setCount(count + 1 )
        setCart([])
    }
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            setCart([])
        }
        
    }


    const handleAddItem = (item) => {
        item.count = count;
        // console.log(item);
        setCart([...cart, item]);
    }
    




    useEffect(() => {
        const foodDetail = foodData.filter(food => food.name === foodName);
        // console.log(foodDetail[0]);
        setFdDetail(foodDetail[0]);
    }, [])

    return (
        <div className=''>
            <Header cart={cart} setCart={setCart}></Header>

            <div className="main-wrapper">
                <div className="wrapper">

                 <div className="food-wrapper">
                        <div className='food-desc'>
                            <h2>{foodName}</h2>
                            <p>{fdDetail.description}</p>
                            <h4>{fdDetail.price}</h4>

                            <span onClick={decrease}>-</span><span>{count}</span><span onClick={increase}>+</span> <br />

                            {
                                count > 0 ? <button onClick={() => handleAddItem(fdDetail)}>Add</button> :
                                    <button disabled>Add</button>
                            }


                            <Link to="/"><button>back</button></Link><br />

                            <Link to="/food/ProceedCart">See Cart</Link>

                  
                            {/* <ProceedCart cart={cart} setCart={setCart} count={count}></ProceedCart> */}
                        </div>

                        <div className="food-img">
                            <img src={fdDetail.image?.props.src} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FoodItemDetails;
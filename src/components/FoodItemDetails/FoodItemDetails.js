import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import { foodData } from '../../data/fakeData';
import Header from '../Header/Header';
import ProceedCart from '../ProceedCart/ProceedCart';
import './FoodItemDetails.css'
import { faMinus } from '@fortawesome/free-solid-svg-icons';

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
        setCount(count + 1)
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

            <div className="main-wrapper container">
                <div className="wrapper">

                    <div className="food-wrapper row p-5">
                        <div className='food-desc col-md-6'>
                            <h2>{foodName}</h2>
                            <p>{fdDetail.description}</p>
                            <h4>price: ${fdDetail.price}</h4>
                            <div className="count-text">
                                <span onClick={decrease}>-</span><span>{count}</span><span onClick={increase}>+</span> <br />
                            </div>
                            


                            {
                                count > 0 ? <button className='btn btn-danger m-2' onClick={() => handleAddItem(fdDetail)}><FontAwesomeIcon icon={faCartShopping} /> Add</button> :
                                    <button className="btn btn-danger m-2" disabled><FontAwesomeIcon icon={faCartShopping} /> Add</button>
                            }


                            <Link to="/"><button className='btn btn-danger m-2'>back</button></Link><br />
                            <div className='d-flex justify-content-around mt-5'>
                                <img src={fdDetail.image?.props.src} alt="" style={{width:'150px'}} />
                                <img src={fdDetail.image?.props.src} alt="" style={{width:'150px'}} />
                            </div>




                            <Link to="/food/ProceedCart">See Cart</Link>


                            {/* <ProceedCart cart={cart} setCart={setCart} count={count}></ProceedCart> */}
                        </div>

                        <div className="food-img col-md-6 d-none d-md-block">
                            <img src={fdDetail.image?.props.src} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FoodItemDetails;
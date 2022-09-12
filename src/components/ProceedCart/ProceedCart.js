import React, { useContext } from 'react';
import './ProceedCart.css'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../App';
import NavBar from '../NavBar/NavBar';

const ProceedCart = (props) => {
    console.log(props)
    /// react hook form 
    const [logInUser, setLogInUser] = useContext(userContext)
    const [shipments, setShipments] = useState({
        submit: false,
        name: '',
        email: '',
        address: '',
        phone: ''

    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { exampleRequired1, exampleRequired2, exampleRequired3, exampleRequired4 } = data;
        const newCart = {
            submit: true,
            name: exampleRequired1,
            email: exampleRequired2,
            address: exampleRequired3,
            phone: exampleRequired4
        }
        setShipments(newCart);
    };



    const cart = props.cart;
    const count = props.count;
    const total = cart?.reduce((sum, num) => sum + num.price, 0)
    const quantity = count;
    const result = (total * quantity)


    console.log(watch("example")); // watch input value by passing the name of it




    return (
        <div>
            <NavBar cart={cart}></NavBar>


            <div className='proceed-cart'>
                <div className='shipment'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("exampleRequired1", { required: true })} placeholder="name" /> <br />
                        {errors.exampleRequired1 && <span>This field is required</span>} <br />
                        <input {...register("exampleRequired2", { required: true })} placeholder="email" /> <br />
                        {errors.exampleRequired2 && <span>This field is required</span>}<br />
                        <input {...register("exampleRequired3", { required: true })} placeholder="address" /> <br />
                        {errors.exampleRequired3 && <span>This field is required</span>}<br />
                        <input {...register("exampleRequired4", { required: true })} placeholder="phone" /> <br />
                        {errors.exampleRequired4 && <span>This field is required</span>}<br />

                        <input type="submit" />
                    </form>
                </div>




                <div className='cart'>
                    <h2>item add: {cart?.length}</h2>
                    <h2>quantity: {quantity}</h2>
                    <p>price: {cart[0]?.price}</p>
                    <p>total price:{result}</p>



                    {
                        shipments.submit ? <Link to='/order-place'><Button variant="danger">Place Order</Button></Link> :
                            <Button disabled variant="danger" >place order</Button>
                    }


                </div>


            </div>

        </div>


    );
};

export default ProceedCart;
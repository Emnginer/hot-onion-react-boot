import React from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';

const Home = (props) => {
  const cart = props.cart;
  const setCart = props.setCart;
  
    return (
        <div>
            <Header cart={cart} setCart={setCart}></Header>
            <Food cart={cart} setCart={setCart}></Food>
            <Demo></Demo>
        </div>
    );
};


const Demo = () => {
    return (
      <div style={{ height: '500px' }}>
  
      </div>
    )
  }
  
  







export default Home;
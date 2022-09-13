import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import FoodItemDetails from './components/FoodItemDetails/FoodItemDetails';
import ProceedCart from './components/ProceedCart/ProceedCart';

import { useState } from 'react';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Rider from './components/Rider/Rider';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const userContext = createContext();


function App() {

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [logInUser, setLogInUser] = useState([]);


  return (
    
    <userContext.Provider value={[logInUser, setLogInUser]}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home cart={cart} setCart={setCart} />}></Route>
          <Route path="/home" element={<Home cart={cart} setCart={setCart} />}></Route>
          <Route path="/food/:foodName" element={<FoodItemDetails cart={cart} setCart={setCart} count={count} setCount={setCount} />}></Route>

          <Route path="/food/ProceedCart" element={<PrivateRoute><ProceedCart cart={cart} setCart={setCart} count={count} setCount={setCount} /></PrivateRoute>}></Route>

          <Route path="/order-place" element={<OrderPlace cart={cart} />} />
          <Route path="/rider" element={<Rider />} />
          <Route path="/login" element={<Login cart={cart} setCart={setCart}/>} />
          <Route path="/signUp" element={<SignUp cart={cart} />} />



        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}





export default App;

import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"



const NavBar = (props) => {
    const cart = props.cart;
    const [logInUser, setLogInUser] = useContext(userContext);

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/"><img src={logo} alt="" style={{ width: '200px' }} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='cart-icon d-flex justify-content-center align-items-center'><Link to="/food/ProceedCart"><FontAwesomeIcon icon={faCartShopping} /> <sup>{cart?.length}</sup></Link></Nav.Link>

                        {
                            logInUser.email && logInUser.password ? <button className='logOut' onClick={() => setLogInUser({})}>log Out</button> :
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Nav.Link className='login'><Link to="/login">Login</Link></Nav.Link>
                                    <Nav.Link className='signUp'><Link to="/signUp">Sign Up</Link></Nav.Link>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>











        // <div>
        //     <div className='header'>
        //         <div>
        //             <Link to="/"><img src={logo} alt="" style={{ width: '200px' }} /></Link>
        //         </div>
        //         <div className='nav'>
        //             <nav>
        //                 <ul>
        //                     <Link to="/food/ProceedCart"><FontAwesomeIcon icon={faCartShopping} /> <sup>{cart?.length}</sup></Link>

        //                     {
        //                         logInUser.email && logInUser.password ? <button onClick={() => setLogInUser({})}>log Out</button> :
        //                             <div style={{display: 'inline-block'}}>
        //                                 <Link to="/login">Login</Link>
        //                                 <Link to="/signUp">Sign Up</Link>
        //                             </div>
        //                     }





        //                 </ul>
        //             </nav>
        //         </div>
        //     </div>
        // </div>
    );
};

export default NavBar;
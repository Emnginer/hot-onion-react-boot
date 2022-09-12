import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [logInUser, setLogInUser] = useContext(userContext);

    let location = useLocation();
    let navigate = useNavigate();

    return logInUser.email ? children : <Navigate to="/login" state={{ from: location }} replace/>;
};

export default PrivateRoute;
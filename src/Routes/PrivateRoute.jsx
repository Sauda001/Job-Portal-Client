import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Shared/Loading';

const PrivateRoute = ({children}) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/auth/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;
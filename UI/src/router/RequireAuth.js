import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const auth = useSelector(state => state.user);
    let location = useLocation();

    if(!auth.id && false){
        return <Navigate to='/login' state={{from: location}} replace />;
    }
    return children;
}

export default RequireAuth;
/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Spinner from '../UI/Spinner';

function ProtectedRoute({ children }) {
    const { user, isUserLoading } = useContext(AuthContext);
    if (isUserLoading) return <Spinner />;
    
    return user ? children : <Navigate to="/auth" replace />;
}

export default ProtectedRoute;

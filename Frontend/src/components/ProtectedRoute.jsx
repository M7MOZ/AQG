/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <div>Loading...</div>;
    console.log('user', user);
    
    return user ? children : <Navigate to="/auth" replace />;
}

export default ProtectedRoute;

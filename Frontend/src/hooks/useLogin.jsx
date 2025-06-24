import { useMutation } from '@tanstack/react-query';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log('login successful:', data.token);
            navigate('/chat'); 
        },
        onError: (error) => {
            console.error('login failed:', error);
        },
    });
    return mutation;
};

export default useRegister;

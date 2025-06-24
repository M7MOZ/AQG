import { useMutation } from '@tanstack/react-query';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      navigate('/chat'); 
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });
  return mutation;
};

export default useRegister;

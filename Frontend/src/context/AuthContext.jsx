/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import axios from '../services/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [context, setContext] = useState("");
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
        try {
            const res = await axios.get('/auth/me'); 
            setUser(res.data);
        } catch (err) {
            setUser(null);
        } 
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, context, setContext, title, setTitle, questions, setQuestions }}>
            {children}
        </AuthContext.Provider>
    );
};
export {AuthProvider, AuthContext};



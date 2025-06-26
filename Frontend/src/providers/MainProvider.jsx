/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from "../context/AuthContext";
function MainProvider({children}) {
    const queryClient = new QueryClient();
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    {children}
                </AuthProvider>           
            </QueryClientProvider>  
        </BrowserRouter>
    )
}

export default MainProvider
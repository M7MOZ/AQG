/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function MainProvider({children}) {
    const queryClient = new QueryClient();
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                {children}                
            </QueryClientProvider>  
        </BrowserRouter>
    )
}

export default MainProvider
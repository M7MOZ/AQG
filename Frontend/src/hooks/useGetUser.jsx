import { getUser } from "../services/auth";
import { useQuery } from "@tanstack/react-query";
export const useGetUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        onError: (error) => {   
            console.error("Error fetching user data:", error);
        }
    });
};
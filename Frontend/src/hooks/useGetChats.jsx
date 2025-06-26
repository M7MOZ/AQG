import { useQuery } from '@tanstack/react-query';
import { getChats } from '../services/chatHistory';

const useGetChats = () => {
    const query = useQuery({
        queryFn: getChats,
        queryKey: ['chats'],
        onSuccess: () => {
            console.log('Chats fetched successfully');
        },
        onError: (error) => {
            console.error('Failed to fetch chats:', error);
        },
    });

    return query;
}
export default useGetChats;
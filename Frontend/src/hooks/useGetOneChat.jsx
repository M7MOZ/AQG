import { useQuery } from '@tanstack/react-query';
import { getOneChat } from '../services/chatHistory';

const useGetOneChat = () => {
    const query = useQuery({
        queryFn: getOneChat,
        queryKey: ['chats'],
        onSuccess: () => {
            console.log('Chat fetched successfully');
        },
        onError: (error) => {
            console.error('Failed to fetch chat', error);
        },
    });

    return query;
}
export default useGetOneChat;
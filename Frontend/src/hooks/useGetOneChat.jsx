import { useQuery } from '@tanstack/react-query';
import { getOneChat } from '../services/chatHistory';

const useGetOneChat = (chatId) => {
    const query = useQuery({
        queryFn: () => getOneChat(chatId),
        queryKey: ['chat', chatId],
        enabled: false,
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
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { saveChat } from '../services/chatHistory';

const useSaveChat = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: saveChat,
        mutationKey: ['saveChat'],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getChats'] });
        },
        onError: (error) => {
            console.error('Failed to save chat:', error);
        },
    });

    return mutation;
}
export default useSaveChat;
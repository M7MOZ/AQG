import { useMutation } from '@tanstack/react-query';
import { saveChat } from '../services/chatHistory';

const useSaveChat = () => {
    const mutation = useMutation({
        mutationFn: saveChat,
        onSuccess: () => {
            console.log('Chat saved successfully');
        },
        onError: (error) => {
            console.error('Failed to save chat:', error);
        },
    });

    return mutation;
}
export default useSaveChat;
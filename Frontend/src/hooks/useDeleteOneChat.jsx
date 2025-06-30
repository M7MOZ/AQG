import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOneChat } from '../services/chatHistory';

export const useDeleteOneChat = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteOneChat,
        onSuccess: () => {
            // Invalidate or refetch the chats list
            queryClient.invalidateQueries(['getChats']);
        },
        onError: (error) => {
            console.error("Error deleting chat:", error);
        }
    });
};
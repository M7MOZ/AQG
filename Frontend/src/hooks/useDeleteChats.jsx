import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteChats } from '../services/chatHistory';

export const useDeleteChats = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteChats,
        onSuccess: () => {
            queryClient.invalidateQueries(['getChats']);
        }
    });
};
import { useMutation } from '@tanstack/react-query';
import { generateQA ,generateQAFromFile } from '../services/questions';

export const useGenerate = () => {
    return useMutation({
        mutationFn: generateQA
    });
}

export const useGenerateFromFile = () => {
    return useMutation({
        mutationFn: generateQAFromFile
    });
}
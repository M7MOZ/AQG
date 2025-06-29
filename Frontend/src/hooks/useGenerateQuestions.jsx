import { useMutation } from '@tanstack/react-query';
import { generateQA ,generateQAFromFile, generateMCQ, generateTrueFalse } from '../services/questions';

export const useGenerate = () => {
    return useMutation({
        mutationFn: generateQA
    });
}
export const useGenerateMCQ = () => {
    return useMutation({
        mutationFn: generateMCQ
    });
}
export const useGenerate_T_F = () => {
    return useMutation({
        mutationFn: generateTrueFalse
    });
}

export const useGenerateFromFile = () => {
    return useMutation({
        mutationFn: generateQAFromFile
    });
}
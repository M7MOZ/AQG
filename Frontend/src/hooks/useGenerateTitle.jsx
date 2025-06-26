import { useMutation } from "@tanstack/react-query";
import { generateTitle } from "../services/chatHistory";

const useGenerateTitle = () => {
    return useMutation({
        mutationFn: generateTitle,
        onSuccess: (data) => {
            console.log("Title generated successfully:", data);
        },
        onError: (error) => {
            console.error("Failed to generate title:", error);
        },
    });
}
export default useGenerateTitle;
import axios from "./axios";

export const generateQA = async (context) => {
    const { data } = await axios.post("/questions", { context }, { withCredentials: true });
    return data;
}

export const generateQAFromFile = async ({ file, type }) => {
    const formData = new FormData();
    formData.append("file", file); 
    
    const { data } = await axios.post(`/extract/${type}`, formData);
    return generateQA(data.text); 
};
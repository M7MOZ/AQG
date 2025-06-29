import axios from "./axios";

export const generateQA = async (context) => {
    const { data } = await axios.post("/questions", { context });
    return data;
};

export const generateQAFromFile = async ({ file, type }) => {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axios.post(`/extract/${type}`, formData);
    return data; 
};

export const generateMCQ = async (context) => {
    const { data } = await axios.post("/questions/mcq", { context });
    return data;
};

export const generateTrueFalse = async (context) => {
    const { data } = await axios.post("/questions/true_false", { context });
    return data;
};
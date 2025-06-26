import axios from "./axios";

export const saveChat = async({ title, context, questions }) => {
    const { data } = await axios.post("/chats", { title, context, questions });
    return data;
}

export const getChats = async() => {
    const { data } = await axios.get("/chats");
    return data;
}

export const getOneChat = async(id) => {
    const { data } = await axios.get(`/chats/${id}`);
    return data;
}

export const generateTitle = async (context) => {
    const { data } = await axios.post("/chats/generate_title", { context });
    return data;
}

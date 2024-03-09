import axios from "axios";

function axiosConfig() {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 5000
    });
}


export async function getCategories() {
    const response = await axiosConfig().get('/categories');
    return response.data;
}

export async function getProducts() {
    const response = await axiosConfig().get('/products');
    return response.data;
}
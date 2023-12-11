import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://shopify-backend-yahs.onrender.com/api"
})

export default axiosInstance 

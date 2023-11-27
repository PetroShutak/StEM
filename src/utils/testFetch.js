import axios from "axios";

export const testFetch = async () => {
    const response = await axios.get("https://stem-server-db.onrender.com/api/products");
    return response.data;
}









import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://stem-server-db.onrender.com";

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/api/products");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
    );
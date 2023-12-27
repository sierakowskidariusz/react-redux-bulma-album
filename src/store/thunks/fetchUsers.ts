import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../../model/User";

export const fetchUsers = createAsyncThunk("users/fetch", async (): Promise<User[]> => {
    const response= await axios.get<User[]>('http://localhost:3005/users');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return response.data;
});

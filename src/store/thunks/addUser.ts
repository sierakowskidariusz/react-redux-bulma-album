import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../model/User";
import axios from "axios";

export const addUser = createAsyncThunk("users/add", async (user: User): Promise<User[]> => {
    const response = await axios.post<User>('http://localhost:3005/users', user).then(() => axios.get<User[]>('http://localhost:3005/users'));
    await new Promise(resolve => setTimeout(resolve, 1000));
    return response.data;
})

import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../model/User";
import axios from "axios";

export const removeUser = createAsyncThunk("users/remove", async (user: User): Promise<User[]> => {
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`).then(() => axios.get<User[]>('http://localhost:3005/users'));
    await new Promise(resolve => setTimeout(resolve, 1000));
    return response.data;
})

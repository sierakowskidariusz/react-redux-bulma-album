import {createSlice, Slice} from "@reduxjs/toolkit";
import {Users} from "../../model/Users";
import {fetchUsers} from "../thunks/fetchUsers";
import {addUser} from "../thunks/addUser";
import {removeUser} from "../thunks/removeUser";

const initialState: Users = {
    data: [],
    isLoading: false,
    error: null
}

const usersSlice: Slice<Users> = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.data = [];
            state.error = action.error;
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.error = action.error;
        })
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(removeUser.rejected, (state, action) => {
            state.error = action.error;
        })
    }
})

export const usersReducer = usersSlice.reducer;

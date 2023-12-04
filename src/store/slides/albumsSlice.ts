import {createSlice} from "@reduxjs/toolkit";
import {fetchAlbums} from "../thunks/fetchAlbums";
import {addAlbum} from "../thunks/addAlbum";
import {removeAlbum} from "../thunks/removeAlbum";
import Albums from "../../model/Albums";
import {fetchUsers} from "../thunks/fetchUsers";

export const albumsSlice = createSlice({
    name: 'albums',
    initialState: {data:{}} as Albums,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.data[action.payload.userId] = action.payload.albums;
        })
        builder.addCase(addAlbum.fulfilled, (state, action) => {
            state.data[action.payload.userId] = action.payload.albums;
        })
        builder.addCase(removeAlbum.fulfilled, (state, action) => {
            state.data[action.payload.userId] = action.payload.albums;
        })
        builder.addCase(fetchUsers.fulfilled, (state) => {
            // jak nastąpiło odświeżenie użytkowników, czyścimy albumy
            state.data = {}
        })
    }
})

export const albumsReducer = albumsSlice.reducer;

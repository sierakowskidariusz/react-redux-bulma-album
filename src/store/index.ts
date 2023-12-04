import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slides/usersSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { removeUser } from "./thunks/removeUser";
import { fetchAlbums } from "./thunks/fetchAlbums";
import { addAlbum } from "./thunks/addAlbum";
import { removeAlbum } from "./thunks/removeAlbum";
import {albumsReducer} from "./slides/albumsSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsReducer,
    }
})

type StateType = typeof store.getState;
type RootState = ReturnType<StateType>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export {
    store,
    fetchUsers,
    addUser,
    removeUser,
    fetchAlbums,
    addAlbum,
    removeAlbum
}


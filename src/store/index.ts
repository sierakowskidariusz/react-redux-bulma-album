import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slides/usersSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./thunks/fetchUsers";
import {addUser} from "./thunks/addUser";
import {removeUser} from "./thunks/removeUser";
import {albumsApi, useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from "../apis/albumsApi";
import {imagesApi, useAddImageMutation, useRemoveImageMutation, useFetchImagesQuery} from "../apis/imagesApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        albumsApi.middleware,
        imagesApi.middleware
    )
})

setupListeners(store.dispatch);

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
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
    useAddImageMutation,
    useFetchImagesQuery,
    useRemoveImageMutation
}

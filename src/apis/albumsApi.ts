import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Album from "../model/Album";

export const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    tagTypes: ['albums'],
    endpoints: builder => ({
        fetchAlbums: builder.query<Album[],string>({
            query: userId => ({
                url: `users/${userId}/albums`,
                method: 'GET'
            }),
            providesTags: ['albums']
        }),
        removeAlbum: builder.mutation<Album,string>({
            query: (albumId: string) => {
                return {
                    url: `albums/${albumId}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['albums'],
        }),
        addAlbum: builder.mutation<Album,Album>({
            query: album => ({
                url: 'albums',
                body: album,
                method: 'POST'
            }),
            invalidatesTags: ['albums']
        }),
    })
});

export const {
    useFetchAlbumsQuery,
    useRemoveAlbumMutation,
    useAddAlbumMutation,
} = albumsApi;

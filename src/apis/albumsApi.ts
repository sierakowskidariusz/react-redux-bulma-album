import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Album from "../model/Album";

export const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/',
        fetchFn: async (...args) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return fetch(...args);
        }
    }),
    tagTypes: ['albums'],
    endpoints: builder => ({
        fetchAlbums: builder.query<Album[],string>({
            query: userId => ({
                url: `users/${userId}/albums`,
                method: 'GET'
            }),
            providesTags: (result, error, userId) => {
                return [{type:'albums', id: userId}];
            }
        }),
        removeAlbum: builder.mutation<Album,Album>({
            query: (album: Album) => {
                return {
                    url: `albums/${album.id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: (result, error, album) => {
                return [{type:'albums', id: album.userId}];
            }
        }),
        addAlbum: builder.mutation<Album,Album>({
            query: album => ({
                url: 'albums',
                body: album,
                method: 'POST'
            }),
            invalidatesTags: (result, error, album) => {
                return [{type:'albums', id: album.userId}];
            }
        }),
    })
});

export const {
    useFetchAlbumsQuery,
    useRemoveAlbumMutation,
    useAddAlbumMutation,
    util
} = albumsApi;

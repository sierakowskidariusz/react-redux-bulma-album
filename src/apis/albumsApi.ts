import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Album from "../model/Album";

export const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    endpoints: builder => ({
        fetchAlbums: builder.query<Album[],string>({
            query: userId => ({
                url: 'albums',
                params: {
                    userId: userId
                },
                method: 'GET'
            }),
        })
    })
});

export const { useFetchAlbumsQuery } = albumsApi;

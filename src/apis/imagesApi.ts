import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Image} from "../model/Image";

export const imagesApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    tagTypes: ['photos'],
    endpoints: builder => ({
        fetchImages: builder.query<Image[],string>({
            query: albumId => ({
                url: `albums/${albumId}/photos`,
                method: 'GET'
            }),
            providesTags: ['photos']
        }),
        addImage: builder.mutation<Image,Image>({
            query: image => ({
                url: 'photos',
                body: image,
                method: 'POST'
            }),
            invalidatesTags: ['photos']
        }),
        removeImage: builder.mutation<Image,string>({
            query: id => ({
                url: `photos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['photos']
        })
    })
})

export const {
    useFetchImagesQuery,
    useAddImageMutation,
    useRemoveImageMutation
} = imagesApi;

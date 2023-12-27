import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Image} from "../model/Image";

export const imagesApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/',
        fetchFn: async (...args) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return fetch(...args);
        }
    }),
    tagTypes: ['photos'],
    endpoints: builder => ({
        fetchImages: builder.query<Image[],string>({
            query: albumId => ({
                url: `albums/${albumId}/photos`,
                method: 'GET'
            }),
            providesTags: (result, error, albumId) => {
                return [{type: 'photos', id: albumId}];
            }
        }),
        addImage: builder.mutation<Image,Image>({
            query: image => ({
                url: 'photos',
                body: image,
                method: 'POST'
            }),
            invalidatesTags: (result, error, image) => {
                return [{type: 'photos', id: image.albumId}];
            }
        }),
        removeImage: builder.mutation<Image,Image>({
            query: image => ({
                url: `photos/${image.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, image) => {
                return [{type: 'photos', id: image.albumId}];
            }
        })
    })
})

export const {
    useFetchImagesQuery,
    useAddImageMutation,
    useRemoveImageMutation,
    util
} = imagesApi;

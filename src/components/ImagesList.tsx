import React from 'react'
import {ImagesListProps} from "../model/ImagesListProps";
import {useFetchImagesQuery} from '../store';
import {Image} from "./Image";
import {LoadingBox} from "./LoadingBox";

export default function ImagesList(props: ImagesListProps): React.ReactElement<HTMLDivElement> {
    const {
        isLoading,
        isFetching,
        isUninitialized,
        error,
        isError,
        data
    } = useFetchImagesQuery(props.album.id as string);
    if(isLoading || isUninitialized) {
        return <LoadingBox />
    }
    if(isError) {
        return <div className="is-warning">{error.toString()}</div>
    }
    if( ! data || ! data.length ) {
        return <div className="has-text-centered">No data</div>
    }
    return <div>
        {data.map(image => <Image key={image.id} image={image} />)}
        {isFetching && <LoadingBox />}
    </div>
}

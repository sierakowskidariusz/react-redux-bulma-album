import React from 'react'
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import {ImagesListProps} from "../model/ImagesListProps";
import { useFetchImagesQuery } from '../store';
import {Image} from "./Image";

export default function ImagesList(props: ImagesListProps): React.ReactElement<HTMLDivElement> {
    const {
        isLoading,
        isFetching,
        isUninitialized,
        error,
        isError,
        data
    } = useFetchImagesQuery(props.album.id as string);
    if(isLoading || isFetching || isUninitialized) {
        return <div className="is-flex is-flex-direction-row is-justify-content-center">
            <UseAnimations animation={loading} title="Loading..."/>
        </div>
    }
    if(isError) {
        return <div className="is-warning">{error.toString()}</div>
    }
    if( ! data || ! data.length ) {
        return <div className="has-text-centered">No data</div>
    }
    return <div>{data.map(image => <Image key={image.id} image={image} />)}</div>
}

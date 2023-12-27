import React from 'react'
import {useFetchAlbumsQuery} from "../store";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import ImagesPanel from "./ImagesPanel";
import {AlbumsListProps} from "../model/AlbumsListProps";

export default function AlbumsList(params: AlbumsListProps): React.ReactElement<HTMLDivElement> {
    const {
        data,
        isError,
        error,
        isLoading,
        isFetching,
        isUninitialized
    } = useFetchAlbumsQuery(params.user.id as string);
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
    return <div>{data.map(album => <ImagesPanel key={album.id} album={album} />)}</div>
}

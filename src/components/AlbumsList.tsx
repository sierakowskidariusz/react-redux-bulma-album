import React from 'react'
import {useFetchAlbumsQuery} from "../store";
import ImagesPanel from "./ImagesPanel";
import {AlbumsListProps} from "../model/AlbumsListProps";
import {LoadingBox} from "./LoadingBox";

export default function AlbumsList(params: AlbumsListProps): React.ReactElement<HTMLDivElement> {
    const {
        data,
        isError,
        error,
        isLoading,
        isFetching,
        isUninitialized
    } = useFetchAlbumsQuery(params.user.id as string);
    if(isLoading || isUninitialized) {
        return <LoadingBox />;
    }
    if(isError) {
        return <div className="is-warning">{error.toString()}</div>
    }
    if( ! data || ! data.length ) {
        return <div className="has-text-centered">No data</div>
    }
    return <div>
        {data.map(album => <ImagesPanel key={album.id} album={album} />)}
        {isFetching && <LoadingBox />}
    </div>
}

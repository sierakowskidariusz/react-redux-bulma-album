import React, {useEffect} from 'react'
import {User} from "../model/User";
import useThunk from "../hooks/useThunk";
import {fetchAlbums, useAppSelector} from "../store";
import Album from "../model/Album";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export default function AlbumList(params: { user: User }): React.ReactElement {
    const usersAlbumsMap = useAppSelector(state => state.albums.data);
    const [fetchAlbumsDispatch] = useThunk(fetchAlbums);
    const userAlbums: Album[] | undefined = usersAlbumsMap[params.user.id as string];
    const isNotLoaded = userAlbums === undefined;
    useEffect(() => {
        if (isNotLoaded) {
            fetchAlbumsDispatch(params.user)
        }
    });
    return isNotLoaded
        ? <div className="is-flex is-flex-direction-row is-justify-content-center">
            <UseAnimations animation={loading} title="Loading..."/>
        </div>
        : userAlbums.length
            ? <ul>{userAlbums.map(album => <li key={album.id}>{album.title}</li>)}</ul>
            : <div className="has-text-centered">No data</div>
}

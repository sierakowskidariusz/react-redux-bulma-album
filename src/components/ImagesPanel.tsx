import React, {MouseEvent} from 'react'
import {ImagesPanelProps} from "../model/ImagesPanelProps";
import ExpandablePanel from "./ExpandablePanel";
import ImagesList from "./ImagesList";
import {RiImageAddFill} from "react-icons/ri";
import LoadingButtonIcon from "./LoadingButtonIcon";
import {useAddImageMutation, useRemoveAlbumMutation} from "./../store";
import {faker} from "@faker-js/faker";

export default function ImagesPanel(props: ImagesPanelProps): React.ReactElement<HTMLDivElement> {
    const [removeAlbum, {isLoading: isDeleting}] = useRemoveAlbumMutation();
    const [addImage, {isLoading: isAdding}] = useAddImageMutation();
    function deleteAlbumHandle() {
        removeAlbum(props.album.id as string);
    }
    function addImageHandle(event: MouseEvent) {
        event.stopPropagation();
        addImage({
            name: faker.word.adjective(),
            albumId: props.album.id as string
        })
    }
    return <ExpandablePanel
        isDeleting={isDeleting}
        deleteLabel="Delete album"
        deleteItemHandel={deleteAlbumHandle}
        panelHeader={props.album.name}
        addButton={<LoadingButtonIcon className="card-header-icon" isLoading={isAdding} staticIcon={<RiImageAddFill />} label="Add image" onClick={addImageHandle} />}
    >
        <ImagesList album={props.album}/>
    </ExpandablePanel>
}

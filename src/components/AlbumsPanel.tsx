import React, {MouseEvent} from "react";
import {AlbumsPanelProps} from "../model/AlbumsPanelProps";
import {removeUser, useAddAlbumMutation} from "../store";
import AlbumsList from "./AlbumsList";
import ExpandablePanel from "./ExpandablePanel";
import LoadingButtonIcon from "./LoadingButtonIcon";
import {RiFolderAddFill} from "react-icons/ri";
import {faker} from "@faker-js/faker";
import useThunk from "../hooks/useThunk";

export function AlbumsPanel(props: AlbumsPanelProps): React.ReactElement<HTMLDivElement> {
    const [removeUserDispatch, isDeleting] = useThunk(removeUser);
    const [addAlbum, {isLoading: isAdding}] = useAddAlbumMutation();
    const handleRemoveUser = (event: MouseEvent) => {
        event.stopPropagation();
        removeUserDispatch(props.user);
    };
    function addAlbumHandle(event: MouseEvent) {
        event.stopPropagation();
        const word: string = faker.word.adjective();
        addAlbum({
            name: word,
            userId: props.user.id as string
        })
    }
    return <ExpandablePanel
        isDeleting={isDeleting}
        deleteLabel="Delete user"
        deleteItemHandle={handleRemoveUser}
        panelHeader={props.user.name}
        addButton={<LoadingButtonIcon className="card-header-icon" isLoading={isAdding} staticIcon={<RiFolderAddFill />} label="Add album" onClick={addAlbumHandle} />}
    >
        <AlbumsList user={props.user} />
    </ExpandablePanel>
}

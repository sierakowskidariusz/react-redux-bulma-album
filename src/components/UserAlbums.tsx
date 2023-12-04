import React, {MouseEvent, useState} from "react";
import {UserAlbumsProps} from "../model/UserAlbumsProps";
import classNames from "classnames";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {MdRemoveCircle} from "react-icons/md";
import {removeUser} from "../store";
import useThunk from "../hooks/useThunk";
import LoadingButtonIcon from "./LoadingButtonIcon";
import AlbumList from "./AlbumList";

export function UserAlbums(props: UserAlbumsProps): React.ReactElement {
    const {user, children, className, ...rest} = props;
    const componentClassName = classNames(className, "card");
    const [open, setOpen] = useState(false);
    const [removeUserDispatch, isDeleting] = useThunk(removeUser);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleRemoveUser = (event: MouseEvent) => {
        event.stopPropagation();
        removeUserDispatch(user);
    };
    const classNameHeaders = classNames("card-header", {
        "is-opacity-5": isDeleting
    });
    return <div {...rest} className={componentClassName} style={{marginBottom: 10}}>
        <header className={classNameHeaders} onClick={handleOpen}>
            <LoadingButtonIcon
                className="card-header-icon"
                onClick={handleRemoveUser}
                isLoading={isDeleting}
                label="Delete user"
                staticIcon={<MdRemoveCircle />}
            />
            <p className="card-header-title">{user.name}</p>
            <button className="card-header-icon">{open ? <FaAngleUp /> : <FaAngleDown />}</button>
        </header>
        {open && ! isDeleting && <div className="card-content">
            <div className="content"><AlbumList user={user} /></div>
        </div>}
    </div>;
}

import React from "react";
import {ImageProps} from "../model/ImageProps";
import LoadingButtonIcon from "./LoadingButtonIcon";
import {MdRemoveCircle} from "react-icons/md";
import {useRemoveImageMutation} from "../store";

export function Image(props: ImageProps): React.ReactElement<HTMLElement> {
    const image = props.image;
    const [removeImage, {isLoading: isDeleting}] = useRemoveImageMutation();
    function deleteItemHandel() {
        removeImage(image);
    }
    return <article className="message">
        <div className="message-header">
            <p className="is-marginless">{image.name}</p>
            <LoadingButtonIcon
                className="delete"
                onClick={deleteItemHandel}
                isLoading={isDeleting}
                label="Remove image"
                staticIcon={<MdRemoveCircle />}
            />
        </div>
        <div className="message-body">
            <figure className="image is-3by2">
                <img src={`https://picsum.photos/seed/${image.id}/300/200`} title={image.name} key={image.id} alt={image.name} />
            </figure>
        </div>
    </article>
}

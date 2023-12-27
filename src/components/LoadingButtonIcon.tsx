import React from "react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import LoadingButtonProps from "../model/LoadingButtonProps";

export default function LoadingButtonIcon(props: LoadingButtonProps): React.ReactElement<HTMLButtonElement> {
    return <button className={props.className} title={props.label} disabled={props.isLoading} onClick={props.onClick}>
        {props.isLoading ? <UseAnimations animation={loading} size={16} /> : props.staticIcon}
    </button>;
}

import React from "react";
import LoadingButtonProps from "../model/LoadingButtonProps";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export function LoadingButton(props:LoadingButtonProps): React.ReactElement {
    return <button className={props.className} onClick={props.onClick} disabled={props.isLoading} title={props.label}>
        <span className="icon is-small">{props.isLoading ? <UseAnimations animation={loading} size={24} /> : props.staticIcon}</span>
        <span>{props.label}</span>
    </button>
}

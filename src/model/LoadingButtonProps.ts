import React, {MouseEventHandler} from "react";

export default interface LoadingButtonProps {
    isLoading: boolean;
    staticIcon: React.ReactElement;
    label: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

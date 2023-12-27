import React from "react";

export interface ExpandablePanelProps extends React.HTMLAttributes<HTMLElement> {
    isDeleting: boolean,
    deleteLabel: string,
    deleteItemHandle: React.MouseEventHandler<HTMLButtonElement>,
    panelHeader: string,
    addButton?: React.ReactElement
}

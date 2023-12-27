import React from "react";

export interface ExpandablePanelProps extends React.HTMLAttributes<HTMLElement> {
    isDeleting: boolean,
    deleteLabel: string,
    deleteItemHandel: React.MouseEventHandler<HTMLButtonElement>,
    panelHeader: string,
    addButton?: React.ReactElement
}

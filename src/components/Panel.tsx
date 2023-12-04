import React from 'react'
import {PanelProps} from "../model/PanelProps";
import classNames from "classnames";

export function Panel(props: PanelProps): React.ReactElement {
    const {className, children, ...rest} = props;
    const classes = classNames(className, "box");
    return <div {...rest} className={classes}>{children}</div>
}

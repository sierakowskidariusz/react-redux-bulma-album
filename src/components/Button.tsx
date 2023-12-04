import classNames from "classnames";
import {ButtonProps} from "../model/ButtonProps";
import React from "react";

/**
 * Komponent z przyciskiem
 * @constructor
 */
export default function Button(props: ButtonProps): React.ReactElement {
    const {
        primary = false,
        secondary = false,
        success = false,
        warning = false,
        danger = false,
        outline = false,
        rounded = false,
        className,
        children,
        ...rest
    } = props;
    const classes = classNames(className, "button", {
        'is-primary': primary,
        'is-danger': danger,
        'is-info': secondary,
        'is-warning': warning,
        'is-success': success,
        'is-rounded': rounded,
        'is-outlined': outline
    })
    return <button {...rest} className={classes}>{children}</button>;
}

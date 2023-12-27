import React, {useState} from 'react'
import classNames from "classnames";
import LoadingButtonIcon from "./LoadingButtonIcon";
import {MdRemoveCircle} from "react-icons/md";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {ExpandablePanelProps} from "../model/ExpandablePanelProps";

export default function ExpandablePanel(props: ExpandablePanelProps): React.ReactElement<HTMLDivElement> {
    const {
        children,
        className,
        deleteItemHandel,
        isDeleting,
        deleteLabel,
        panelHeader,
        addButton,
        ...rest
    } = props;
    const componentClassName = classNames(className, "card");
    const [open, setOpen] = useState(false);
    const classNameHeaders = classNames("card-header", {
        "is-opacity-5": isDeleting
    });
    const handleOpen = () => {
        setOpen(!open);
    }
    return <div {...rest} className={componentClassName} style={{marginBottom: 10}}>
        <header className={classNameHeaders} onClick={handleOpen}>
            <LoadingButtonIcon
                className="card-header-icon"
                onClick={deleteItemHandel}
                isLoading={isDeleting}
                label={deleteLabel}
                staticIcon={<MdRemoveCircle />}
            />
            <p className="card-header-title is-marginless">{panelHeader}</p>
            {addButton}
            <button className="card-header-icon">{open ? <FaAngleUp /> : <FaAngleDown />}</button>
        </header>
        {open && ! isDeleting && <div className="card-content">
            <div className="content">{children}</div>
        </div>}
    </div>;
}

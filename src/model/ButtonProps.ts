import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?:boolean,
    secondary?:boolean,
    success?:boolean,
    warning?:boolean,
    danger?:boolean,
    outline?:boolean,
    rounded?:boolean,
}

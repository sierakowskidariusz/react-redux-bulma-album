import React from "react";
import {User} from "./User";

export interface UserAlbumsProps extends React.HTMLAttributes<HTMLDivElement> {
    user: User
}

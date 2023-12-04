import {User} from "./User";
import {ThunkAction} from "./ThunkAction";

export interface Users extends ThunkAction<User[]> {
}

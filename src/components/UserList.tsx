import React, {useEffect} from "react";
import {fetchUsers, useAppDispatch, useAppSelector} from "../store";
import Spinner from "./Spinner";
import {AlbumsPanel} from "./AlbumsPanel";

export default function UserList(): React.ReactElement<HTMLElement> {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const users = useAppSelector(state => state.users);
    if(users.isLoading) {
        return <div className="box overlay" style={{height: 400}}>
            <Spinner />
        </div>;
    }
    if(users.error) {
        return <div className="notification is-warning">{users.error.message}</div>;
    }
    return <section className="section">
        <h1 className="title is-1">List of users</h1>
        {
            users.data.length
                ? users.data.map(user => <AlbumsPanel user={user} key={user.id} />)
                : <div className="box">No data</div>
        }
    </section>;
}

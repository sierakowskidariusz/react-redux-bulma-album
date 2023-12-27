import React from "react";
import {addUser, fetchUsers, useAppDispatch} from "../store";
import {faker} from "@faker-js/faker";
import {FaUserPlus} from "react-icons/fa";
import {IoRefresh} from "react-icons/io5";
import useThunk from "../hooks/useThunk";
import {LoadingButton} from "./LoadingButton";

export function AppMenu(): React.ReactElement<HTMLElement> {
    const dispatcher = useAppDispatch();
    const [addUserDispatch, isLoading] = useThunk(addUser);

    const handleRefresh = () => {
        dispatcher(fetchUsers());
    };
    const handleAddUser = () => {
        addUserDispatch({
            name: faker.person.fullName()
        })
    };
    return <section className="section">
        <nav className="level">
            <div className="level-left">
                <div className="level-item">
                    <div className="buttons">
                        <button className="button is-primary" onClick={handleRefresh}>
                            <span className="icon is-small"><IoRefresh /></span>
                            <span>Refresh</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <div className="buttons">
                        <LoadingButton
                            className="button is-danger"
                            onClick={handleAddUser}
                            isLoading={isLoading}
                            label="Add user"
                            staticIcon={<FaUserPlus />}
                        />
                    </div>
                </div>
            </div>
        </nav>
    </section>;
}

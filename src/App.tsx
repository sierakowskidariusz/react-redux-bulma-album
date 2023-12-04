import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import {AppMenu} from "./components/AppMenu";

function App(): React.ReactElement {
    return <div>
        <div className="container is-fluid">
            <AppMenu />
            <UserList />
        </div>
    </div>;
}

export default App;

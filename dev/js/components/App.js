import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <center><h2>User Details</h2></center>
            <center><UserDetails /></center>
    </div>
);

export default App;

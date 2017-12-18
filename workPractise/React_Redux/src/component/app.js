import React from 'react';

import Header from './header';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

export default class App extends React.Component{
    render(){
        return(
            <div>
            <center>
                <Header />
                <UserList />
                <h2>UserDetails</h2>
                <UserDetails />
            </center>
            </div>
        )
    }
}
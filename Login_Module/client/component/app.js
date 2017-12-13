import React from 'react';

import ReactDOM from 'react-dom';
import Input from './input';
import PrintingState from './printingState';

export default class App extends React.Component {

    render() {
        return (
            <div >
                <center><h1 className="jumbotron p-3  bg-dark text-white">User Login</h1></center>
                <Input />
            </div>
        )
    }
}

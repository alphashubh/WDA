import React from 'react';

import ReactDOM from 'react-dom';
import Input from './input';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <h1>App Component</h1>
                <Input />
            </div>
        )
    }
}

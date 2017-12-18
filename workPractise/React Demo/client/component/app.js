import React from 'react';

import FunctionComponent from './function-component';
import ClassComponent from './class-component';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>App Component</h1>
                <ClassComponent />
                <FunctionComponent passingprops="Props Coming From Parent Componenet"/>
            </div>
        )
    }
} 
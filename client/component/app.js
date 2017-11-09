import React from 'react';

import Header from './header';
import Footer from './footer';
import Slideshow from './slideshow';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <Header />
                </div>
                <Slideshow />
                <h1>App Component</h1>
                <Footer />
            </div>
        )
    }
} 
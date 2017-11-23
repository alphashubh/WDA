import React from 'react';

import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Slideshow from './slideshow';
import About from './about';
import Contact from './contact';
import JsonList from './jsonList';

export default class App extends React.Component {

    handleScrollToElement(num) {
        console.log(num);
        var Element1 = this.refs.about;
        var Element2 = this.refs.contact;
        var Element0 = this.refs.header;
        if (num === "about") {
            Element1.scrollIntoView();
            this.setState({ childVisible: true });
            this.setState({ childVisible1: false });
        }
        else if (num === "contact") {
            Element2.scrollIntoView();
            this.setState({ childVisible1: true });
            this.setState({ childVisible: false });
        }
        else if (num === "home") {
            Element0.scrollIntoView();
            this.setState({ childVisible1: false });
            this.setState({ childVisible: false });
        }

    }

    constructor() {
        super();
        this.state = {
            childVisible: false,
            childVisible1: false
        }
    }


 
    render(props) {
        return (
            <div>
                <div className="header" ref="header">
                <Header name={this.handleScrollToElement.bind(this)} />
                </div>
                <Slideshow />
                <div ref="about" >

                    {
                        this.state.childVisible
                            ? <About />
                            : null
                    }

                </div>
                <div ref="contact">
                    {
                        this.state.childVisible1
                            ? <Contact />
                            : null
                    }
                </div>
                <JsonList />
                <Footer />
              
            </div>
        )
    }
}

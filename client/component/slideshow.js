import React from 'react';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image: { path: 1 } };
        this.changeSlide();

    }



    changeSlide = () => {

        if (this.state.image.path === 4) {
            this.setState({ image: { path: 1 } });
            setTimeout(() => { this.changeSlide(); }, 2000);
        } else {
            this.setState({ image: { path: this.state.image.path + 1 } });
            setTimeout(() => { this.changeSlide(); }, 2000);
        }
    }

    render() {
        return (
            <div className="slideshow">
                <center><img src={require('./slideImage/' + this.state.image.path + '.png')} width='100%' /></center>
            </div>
        );
    }
}
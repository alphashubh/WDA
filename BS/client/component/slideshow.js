import React from 'react';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image: { path: 1 },
    class: "" };
        this.changeSlide();
        
    }

componentWillMount(){
    console.log(window.outerWidth);
    if(window.outerWidth<=576){
        console.log("width 576");
        this.setState({class: "slideshow1"})
    }
    else{
        console.log("width greater");
        
        this.setState({class: "slideshow"})
        
    }
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
        <div className={this.state.class}>
                <center><img src={require('./slideImage/' + this.state.image.path + '.png')} width='100%' /></center>
            </div>
        );
    }
}
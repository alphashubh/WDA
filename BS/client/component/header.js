import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false,
        }
    }

    showView() {
        if (window.outerWidth <= 576) {
            return (
                <div className="box">
                    <div className="hamburger">
                        <h3><span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" onClick={() => {(this.state.display==false) ? this.setState({ display: true }) : this.setState({ display: false })}}></span>  </h3>
                    </div>
                    {this.showMenu()}
                </div>
            );
        }
        else {
            return (<div className="box">
                <ul className="nav nav-pills">
                    <li><Link onClick={() => this.props.name("home")} ><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link></li>
                    <li><Link onClick={() => this.props.name("about")} ><span class="glyphicon glyphicon-user" aria-hidden="true"></span> About</Link></li>
                    <li><Link onClick={() => this.props.name("contact")} ><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Contact</Link></li>
                </ul>
            </div>
            )
        }
    }

    

    showMenu() {
        
        if(this.state.display==false){
            return null;
        }
        else{
            return(
                <div className="menu_span">
                        <div onClick={this.scrollAction.bind(this)} id="home"><span id="home" class="glyphicon glyphicon-home" aria-hidden="true" > Home</span></div>
                        <div onClick={this.scrollAction.bind(this)} id="about"><span class="glyphicon glyphicon-user" aria-hidden="true" id="about"> About</span></div>
                        <div onClick={this.scrollAction.bind(this)} id="contact"><span class="glyphicon glyphicon-envelope" aria-hidden="true" id="contact"> Contact</span></div>
                    </div>
            )
        }
    }

    scrollAction(e) {
        this.props.name( e.target.id);
        this.setState({display: false});
    }

    render(props) {
        return <div>{this.showView()}</div>
    }

};

export default Header;  
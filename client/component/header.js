import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    render(props) {
        return (
            <div className="box">
                <ul className="nav nav-pills">
                    <li><Link onClick={() => this.props.name("home")}><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link></li>
                    <li><Link onClick={() => this.props.name("about")}><span class="glyphicon glyphicon-user" aria-hidden="true"></span> About Us</Link></li>
                    <li><Link onClick={() => this.props.name("contact")}><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Contact Us</Link></li>
                    <li><Link to='/genrateQr'><span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span> Generate Qr</Link></li>
                </ul>
            </div>

        );
    }

};

export default Header;  
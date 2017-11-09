import React from 'react';
import {Link} from 'react-router';

const Header = () =>{
    return(
        <ul  className="nav nav-pills">
            <li><Link>Home</Link></li>
            <li><Link>About Us</Link></li>
            <li><Link>Contact Us</Link></li>
        </ul>
    );
};  
 
export default Header;  
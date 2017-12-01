import React from 'react';
import {Link} from 'react-router';

const Navigation =() =>{
    return(
        <div className="row bg-dark">
        <div className=" breadcrumb  bg-dark text-white col-md-3 offset-md-9">
            <li><Link to='/timeline' className="btn btn-dark"><i class="fa fa-user-circle-o" aria-hidden="true"></i>Timeline</Link></li>
            <li><Link to='/details' className="btn btn-dark"><i class="fa fa-list-alt" aria-hidden="true"></i> Details</Link></li>
        <li ><Link to='/' className="btn btn-dark"><i class="fa fa-power-off" aria-hidden="true"></i> Logout</Link></li>
        </div>
       
        </div>
    )
}

export default Navigation;
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

const Navigation =(props) =>{
    return(
        <div className="row bg-dark">
        <div className=" breadcrumb  bg-dark text-white col-md-4 offset-md-8">
            <li><Link to='/timeline.html' className="btn btn-dark"><i class="fa fa-user-circle-o" aria-hidden="true"></i> {props.name.username}'s Timeline</Link></li>
            <li><Link to='/details.html' className="btn btn-dark"><i class="fa fa-list-alt" aria-hidden="true"></i> Details</Link></li>
        <li ><Link to='/index.html' className="btn btn-dark"><i class="fa fa-power-off" aria-hidden="true"></i> Logout</Link></li>
        </div>
       
        </div>
    )
}
function mapStateToProps(state) {
    return {
        name: state.InputReducer
    }
}

export default connect(mapStateToProps)(Navigation);
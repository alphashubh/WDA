import React, {component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends React.Component{
    
    createList(){
        return this.props.user.map((user) => {
            return(
                <li className="btn btn-light "
                key={user.id} 
                onClick={()=> this.props.selectUser1(user)}
                >
                <h3>{user.first} {user.last}<br/></h3>
                </li>
            )
        })
    }
    render(){
        return(
            <ul>
                {this.createList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser1:selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
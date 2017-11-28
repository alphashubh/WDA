import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as takingInput from '../actions/input-action';

class Input extends React.Component{
    constructor(){
        super();
    }
    updateState(event){
        event.preventDefault();
   var input ={name: this.iname.value, username: this.username.value };
   this.props.action.takingInput(input);
    }
    
    render(){
        return(
            <div>
            <form onSubmit={this.updateState.bind(this)}>
                <input type="text"
                placeholder="Enter Input" ref={(iname)=> {this.iname=iname}}
                
                required 
                />
                 <input type="text"
                placeholder="Enter UserName" ref={(username)=> {this.username=username}}
               
                required 
                />
                <button className="btn btn-primary">Send Rest</button>
    {this.props.name.name}{this.props.name.username}
            </form>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return{
        name: state.InputReducer
    }
}

function mapDispatchToProps(dispatch){
  return{action:bindActionCreators(takingInput ,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
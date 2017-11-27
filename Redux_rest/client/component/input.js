import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as takingInput from '../actions/input-action';

class Input extends React.Component{
 
    updateState(event){
        event.preventDefault();
        
   var input ={name: this.iname.value, username: this.username.value };
   console.log(input);
   this.props.action.takingInput(input);
    }
    
    handleSubmit(event){
       event.preventDefault();
   var element1= this.props.name.name;
   var element2= this.props.name.username;
   axios.post("http://localhost:3000/user", {
       inputName: element1,
       userName:element2

   })
   .then((response) =>{
       console.log(response);
   })
   .catch((error) =>{
       console.log("error", error);
   })

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                placeholder="Enter Input" ref={(iname)=> {this.iname=iname}}
                onChange={this.updateState.bind(this)}
                required 
                />
                 <input type="text"
                placeholder="Enter UserName" ref={(username)=> {this.username=username}}
                onChange={this.updateState.bind(this)}
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
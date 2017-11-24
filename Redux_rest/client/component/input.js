import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as takingInput from '../actions/input-action';

class Input extends React.Component{
 
    handleSubmit(event){
        event.preventDefault();
   console.log(this.iname.value);
   this.props.action.takingInput(this.iname.value);
    }
    
    secondClick(event){
       event.preventDefault();
   var element= this.props.name.name;
   axios.post("http://localhost:3000/user", {
       inputName: element
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
            <form onSubmit={this.secondClick.bind(this)}>
                <input type="text"
                placeholder="Enter Input" ref={(iname)=> {this.iname=iname}}
                onChange={this.handleSubmit.bind(this)}
                required 
                />
                
                <button className="btn btn-primary">Send Rest</button>
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
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

import * as takingInput from '../actions/input-action';

class Input extends React.Component {
    constructor() {
        super();
        var error;
        this.state={
        name: "", 
        username: ""
        }
    }
    updateState =(event)=> {
        if(this.iname.value && this.username.value && !this.state.name && !this.state.username ){
           console.log("***********000");
             event.preventDefault();
        var input = { name: this.iname.value, username: this.username.value };
        this.props.action.takingInput(input);
        browserHistory.push('/timeline.html');
        }
       else {
           
         event.preventDefault();
           this.checkName();
           this.checkUserName();
       }
    }
    checkName=() => {
        console.log("00000000000000", this.iname.value);
        if(!this.iname.value){
            this.setState({name : "* Name is Required"});
        }
        else if(!/^[a-zA-Z]*$/g.test(this.iname.value)){
             this.setState({name : "* Enter Only Alphabets"});
        }
        else {
            this.setState({name : ""});
        }
        
    }

    checkUserName= () => {
        if(!this.username.value){
            this.setState({username : "* UserName is Required"});
        }
        else {
            this.setState({username : ""});
        }
    }

    render() {
        return (
            <div className="row">
            
                <div className="jumbotron col-md-4 offset-md-4 ">
                    <center>
                        <form onSubmit={this.updateState.bind(this)} >

                            <h2 className=" mb-3">Input User Details</h2>
                            <input type="text"
                                placeholder="Enter Input" ref={(iname) => { this.iname = iname } }
                                className="form-group form-control" 
                                maxlength="10"
                                onChange={this.checkName}
                                />
                            <span className="text-danger float-left">{this.state.name}</span>
                            <br />
                            <input type="text"
                                placeholder="Enter UserName" ref={(username) => { this.username = username } }
                                className="form-group form-control "
                               onChange={this.checkUserName}
                                />
                                 <span className="text-danger float-left">{this.state.username}</span>
                            <br />
                            <button className="btn btn-primary ">Send Rest</button>
                        </form>
                    </center>
                </div>
               
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.InputReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(takingInput, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
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
    }
    updateState(event) {
        event.preventDefault();
        var input = { name: this.iname.value, username: this.username.value };
        this.props.action.takingInput(input);
        browserHistory.push('/timeline');
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
                                required
                                />
                            <br />
                            <input type="text"
                                placeholder="Enter UserName" ref={(username) => { this.username = username } }
                                className="form-group form-control "
                                required
                                />
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
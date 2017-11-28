import React from 'react';
import {connect} from 'react-redux';

class PrintingState extends React.Component{
    showInput(){
        if(!this.props.name.name && !this.props.name.username){
            return <h2></h2>
        }
        else{
          return  <h1>Name: {this.props.name.name} <br/> UserName: {this.props.name.username}</h1>
        }
    }
    render(){
        return(
            <div>
            {this.showInput()}
            </div>
        )
    }

  
}
function  mapStateToProps(state){
        return{
            name: state.InputReducer
        }
    }

export default connect(mapStateToProps)(PrintingState);
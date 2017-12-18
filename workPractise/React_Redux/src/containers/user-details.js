import React, {component} from 'react';
import { connect } from 'react-redux';


class UserDeatils extends React.Component{
    render(){
        if(!this.props.user){
             return (<h3>Select User to see the details</h3>);
            }
        return(
                <div  >
                    <img className="figure-img img-fluid rounded" src={this.props.user.thumbnail}/>
                    <div ><strong>Name:</strong> {this.props.user.first} {this.props.user.last}</div>
                    <div><strong>Hobby:</strong> {this.props.user.hobby}</div>
                    <div><strong>Age:</strong> {this.props.user.age}</div> 
                </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user:state.activeUser
    }
}

export default connect(mapStateToProps) (UserDeatils);
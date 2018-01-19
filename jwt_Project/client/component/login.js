import React from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userName: "",
            password: "",
            error: "",
        }
    
    }
    verifyToken(){
        axios.post("http://10.224.213.130:3000/verifytoken",{
            token: cookie.load('token')
        }).then((response)=>{
            console.log(response);
             this.setState({error: response.data.msg});
        }).catch((error)=>{
               console.log(error);
        })
    }
    clicklogout(){
       cookie.remove('token', { path: '/' })
        this.setState({error: "Logout Successfull"});
    }

    componentDidMount(){ 
        this.verifyToken();
    }
    authenticateUser(event){
        event.preventDefault();
        //alert("Requesting User Authentication......")
        axios.post("http://10.224.213.130:3000/user",{
            user_name: this.state.userName,
            password: this.state.password
        }).then((response)=>{
            //alert(response.data.msg);
            if(response.data.access_token){
                this.setState({error: response.data.msg});
            console.log(response.data.access_token); cookie.save
                cookie.save('token', response.data.access_token, { path: '/' });
                console.log("Saved cookie: "+ cookie.load('token'));
            }
            else{
            this.setState({error: response.data.msg});
            console.log(response.data.access_token);
            }
           
        }).catch((error)=>{
            console.log("error in Post"+error);
        })
    }
    render(){
        return(
            <div>
            <center>
            <h1 className="jumbotron">User Login</h1>
            <h6 className="text-danger">{this.state.error}</h6>
            <form onSubmit={this.authenticateUser.bind(this)}>
                <input className=" col-md-3 "
                type="text"
                placeholder="Username" ref={(username) => { this.username = username } }
                onChange={()=>this.setState({userName: this.username.value})}
                required
                />
                <br/><br/>
                <input className=" col-md-3 "
                type="password"
                placeholder="Password" ref={(password) => { this.password = password } }
                onChange={()=>this.setState({password: this.password.value})}
                required
                />
                <br/><br/>
                <button 
                className="btn-primary col-md-3" 
                >Login</button>
                </form>
                <button 
                className="btn-primary col-md-3" 
                onClick={this.clicklogout.bind(this)}
                >Logout</button><br/>
                {this.state.userName}
                {this.state.password}
                </center>

            </div>
        )
    }
}
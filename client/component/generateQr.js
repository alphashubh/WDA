import React from 'react';
import axios from 'axios';

import QrCode from './qrcode';

export default class GenerateQr extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            childVisible1: false
        }

        }
    


handleSubmit(event) {
     
    axios.create({
  baseURL: 'http://someUrl/someEndpoint',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
    
      console.log("000000");
    console.log(this.state.name);

    axios.post("http://localhost:3000/qrcode",{
        qrcode : this.state.name
    })
    .then((response) =>{
        console.log("1999911119999999");
        console.log("Data is being send", response);
     
        
        // this.fetch();
    })
    .catch((error) =>{
        console.log("Error in axios", error);
    });
  
}


    render(){
      //  var element= <img src="http://localhost:3000/downloadQr" alt="qrcode" />;
        return(
            <div>
            <center>
            <h1 className="jumbotron">Generate Qr Code</h1>
           <form onSubmit={this.handleSubmit.bind(this)} className="form-inline" >
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter QR code" value={this.state.name}
                onChange={(event) => this.setState({name: event.target.value})} 
                
                required  />

                <button type="submit" className="btn btn-primary"> Generate QR</button>
              
            </form>
               <QrCode />
            </center>
            </div>
        )
    }
}
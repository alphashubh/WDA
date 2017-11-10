import React from 'react';

export default class Slideshow extends React.Component{
   constructor(props){
       super(props);
       this.state={image:{path:1}};
       this.changeSlide();
        
       }
       
   

changeSlide= () => {
    
    if(this.state.image.path===4){
    this.setState({image:{path:1}});
    setTimeout(() => {this.changeSlide();}, 2000);
    }else{
    this.setState({image:{path:this.state.image.path+1}});
    setTimeout(() => {this.changeSlide();}, 2000);
    }
    }
    
 render(){
        return(
                 <div>
                 <center><img src={require('./slideImage/'+this.state.image.path+'.png')} width='100%'/></center>
                 <button className="next navButton" onClick={this.changeSlide}>&#10095;</button>
                 <button className="prev navButton" onClick={this.changeSlide}>&#10094;</button>
                 </div>
        );
    }
}
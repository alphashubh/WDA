import React from 'react';

import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Slideshow from './slideshow';
import About from './about';
import Contact from './contact';

export default class App extends React.Component{
    handleScrollToElement(num) {
        console.log(num);
       
               var Element1= this.refs.about;
               
               var Element2= this.refs.contact;
               var Element0= this.refs.header;
            
        if(num==="about"){
    Element1.scrollIntoView();
        }
         else if (num=== "contact"){
    Element2.scrollIntoView();
        }
        else if(num==="home"){
            Element0.scrollIntoView();
        }
    
  }
   

    render(props){
        return(
            <div>
                <div className="header" ref="header">
                    <Header name={this.handleScrollToElement.bind(this)} />
                </div>
                <Slideshow />
                <div  ref="about">
                      <About/>
                </div>
              <div  ref="contact">
              
                <Contact />
              </div>
                 <Footer />
            </div>
        ) 
    }
} 
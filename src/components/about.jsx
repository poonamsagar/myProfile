import React, { Component } from 'react';
import pic from './pic.jpg.jpeg'; 


class About extends Component{
    render(){
        return(
            <div className=" ">
            <div className="jumbotron">
            <div className="row">
            <div className="col col-xs-12 col-md-3 col-lg-3"> <img src = {pic} alt="pic" width="200px" height="200px"/></div>
            <div className="col col-md-5 col-lg-5 text-center"><h1 className="display-4">Poonam Sagar</h1>
                                      <p className="lead text-center">
                                      <a href="poonamsagar9212@gmail.com">poonamsagar9212@gmail.com</a>
                                      </p>
            </div>
            <div className="col col-md-4 col-lg-4">
            <div className="pull-right"> Unit 7 8-10 President Avenue, Kogarah-2217, SydneyNSW, Australia.</div>
            </div>
            </div>
  
</div>
            
            </div>
        );
    }
}
export default About;
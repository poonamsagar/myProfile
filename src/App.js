import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Objective from './components/objective';
import Aboutme from './components/aboutme';
import Experience from './components/experience';
import Social from './components/social';
import Academic from './components/academic';
import Personal from './components/personal';
class App extends Component {
  render() {
    return (
      <div className="">
      <Header/>
      <div className="container">
      <About/>
      <Objective/>
      <Aboutme/>
      <Experience/>
      <Social/>
      <Academic/>
      <Personal/>
      </div>
      <Footer/>
     
      </div>
    );
  }
}

export default App;

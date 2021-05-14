import React, { Component } from 'react'
import './App.css';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import Header from './components/Header'
// import Submit from './components/Submit';

class App extends Component {
  render(){
      return (
        <div className="App">
          {this.props.children}
        </div>
      );
    }
}


export default App;

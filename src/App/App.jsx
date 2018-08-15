import React, { Component } from 'react';
import './App.css';
import { gistService } from '../_services';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      test: null
    }
  }

  componentDidMount(){

    let testValue = gistService.test();

    this.setState({
      test: testValue
    });
  }
  
  render() {
    return (
      <div className="App">
      { this.state.test }
      </div>
    );
  }
}

export { App };

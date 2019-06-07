import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dahsboard/Dashboard'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super() 

    this.state = {
      inventory: []
    }
  }

render() {
  return (
    <div className="App">
      <Dashboard inventory={this.state.inventory} />
      
      <Header  />
    </div>
  );
}
  
}

export default App;

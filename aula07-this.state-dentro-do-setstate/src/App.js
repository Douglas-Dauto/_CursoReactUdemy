import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { counter: prevState.counter }
      }  
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} onClick={this.handleClick} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;

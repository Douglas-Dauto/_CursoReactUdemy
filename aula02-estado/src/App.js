import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Douglas Bastos'
    }
  }

  changeText = () => {
    this.setState({
      text: 'Lieci Oliveira'
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} onClick={this.changeText} className="App-logo" alt="logo" />
          <p>
            {text}
          </p>
        </header>
      </div>
    );
  }
}

export default App;

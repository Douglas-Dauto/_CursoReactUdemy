import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Usando as props em componente de função
export default function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.name}</p>
        <p>{props.years}</p>
      </header>
    </div>
  );
}

// Usando as props em componente de classe
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.name}</p>
          <p>{this.props.years}</p>
        </header>
      </div>
    );
  }
}

// Pode-se fazer desestruturação das props direto no parâmetro
export default function App({name, years}) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{name}</p>
        <p>{years}</p>
      </header>
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  }

  /*
    Não é recomendado usar o this.state dentro do setState porque corremos o risco de não pegar o estado anterior correto, para resolver isto usamos uma função de callback que recebe prevState e prevProps.
  */

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        return { counter: prevState.counter }
      }  
    );
  }
  /* 
    mesma coisa que:

    this.setState({ counter: this.state.counter + 1 });
  */
  // OBS: A mesma situação se aplica a prevProps.

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

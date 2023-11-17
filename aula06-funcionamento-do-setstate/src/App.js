import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/*
  O setState faz uma comparação entre os elementos do DOM para saber o que mudou, essa comparação demora alguns milisegundos, desta forma códigos que estão abaixo do setState podem ser executado antes.
*/

class App extends Component {
  state = {
    counter: 0
  }

  /*
    Para resolver isto, dentro do setState podemos passar uma função anônima de callback para executar código depois que o setState fizer a comparação.
  */
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, 
      () => {
        console.log(this.state.counter);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default App;

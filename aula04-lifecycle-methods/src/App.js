import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      numero: 0
    }
  }

  clearSetTimeOut = null;

  componentDidMount() {
    let cep = null;

    fetch('viacep.com.br/ws/01001000/json/')
    .then((cep) => cep.json())
    .then((jsonCep) => {
      cep = jsonCep;
    })

    this.setState({
      text: cep,
    });
  }

  componentDidUpdate() {
    this.setTimeOutState();
  }

  componentWillUnmount() {
    clearTimeout(this.clearSetTimeOut);
  }

  setTimeOutState = () => {
    const numero = this.state.numero;

    this.clearSetTimeOut = setTimeout(() => {
      this.setState({
        text: 'Lieci Oliveira',
        numero: numero + 1
      });
    }, 1000);
  }

  render() {
    const text = this.state.text;
    const numero = this.state.numero;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{text}</p>
          <p>{numero}</p>
        </header>
      </div>
    );
  }
}

export default App;

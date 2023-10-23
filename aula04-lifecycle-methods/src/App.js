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

  async componentDidMount() {
    const data = await this.fetchApi();

    this.setState({
      text: data.cep,
    });
  }

  fetchApi = async () => {
    const response = await fetch('http://viacep.com.br/ws/40713030/json');
    const jsonText = await response.json();

    return jsonText;
  }

  componentDidUpdate() {
    // this.setTimeOutState();
  }

  componentWillUnmount() {
    // clearTimeout(this.clearSetTimeOut);
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

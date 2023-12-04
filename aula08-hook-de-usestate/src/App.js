import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/* 
  O hook useState é usado para controlar o estado do componente, ele substitui o this.state e o this.setState().
  No hook useState não controlamos todos os estados de uma só vez, cada estado possui seu próprio useState().
  O hook useState pode receber um argumento que será usado para o valor inicial do estado.
  No hook useState precisamos fazer atribuição via desestruturação de array para pegarmos o estado e a função para setar o estado.
*/

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse?'reverse':'';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  }

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>
        
        <p>
          <button type='button' onClick={handleClick}>
            Reverse
          </button>
        </p>

        <p>
          <button type='button' onClick={handleIncrement}>
            Increment
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

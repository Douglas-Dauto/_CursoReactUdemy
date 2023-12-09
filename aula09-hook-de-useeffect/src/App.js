import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

/*
  O hook useEffect é usado para controlar os ciclos de vida do componente.
  O hook useEffect simula os métodos de ciclo de vida ComponentDidUpdate, ComponentDidMount e ComponentWillUmonut.
  O hook useEffect pode receber um array como segundo argumento, se for um array vazio que dizer que não possui dependências, caso contrário, possui.
  O hook useEffect que possui dependência é chamado toda vez que a dependência mudar.
*/

function App() {
  const [counter, setCounter] = useState(0);

  // Simula o ComponentDidUpdate
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  // Simula o ComponentDidMount
  useEffect(() => {
    console.log('ComponentDidMount');
    window.document.querySelector('button')?.addEventListener('click', handleClick);

    // Simula o ComponentWillUmount, limpeza (pode-se usar nos outros tipos do useEffect também)
    return () => {
      console.log('ComponentWillUmount');
      window.document.querySelector('button')?.removeEventListener('click', handleClick);
    }
  }, []); // Array sem dependências

  // Com dependência, executa toda vez que a dependência mudar
  useEffect(() => {
    console.log(`Contador mudou para ${counter}`);
  }, [counter]); // Array com dependência

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button>+</button>
    </div>
  );
}

export default App;

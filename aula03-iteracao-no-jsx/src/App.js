import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 1,
          name: 'Douglas',
          years: 22
        },
        {
          id: 2,
          name: 'Alexandre',
          years: 20
        },
        {
          id: 3,
          name: 'Luana',
          years: 19
        }
      ]
    }
  }

  render() {
    const { posts } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          {posts.map((posts) => (
            <div key={posts.id}>
              <p>{posts.name}</p>
              <p>{posts.years}</p>
            </div >
          ))}
        </header>
      </div>
    );
  }
}

export default App;

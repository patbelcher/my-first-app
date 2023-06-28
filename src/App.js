import logo from './logo.svg';
import beachBabe from './beachBabe.png'
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <img src={beachBabe} className="App-logo" alt="logo" />
        <p>
          I'm <code>src/App.js</code> getting hungry!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @ Boca Code
        </a>
      </header>
    </div>
  );
}

export default App;

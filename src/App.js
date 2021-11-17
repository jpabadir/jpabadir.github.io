import logo from './logo.svg';
import me from './assets/picofme.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p>
          This is JP's app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test change
        </a>
      </header>
    </div>
  );
}

export default App;

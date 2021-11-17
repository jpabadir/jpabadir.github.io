import logo from './logo.svg';
import me from './assets/picofme.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p>Site in construction. Come back for some cool updates!</p>
        <a className="App-link" href="https://github.com/jpabadir" target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;

import me from './assets/picofme.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Jean-Philippe Abadir</div>
        <img src={me} className="ProfilePicture" alt="logo" />
        <a href="article-1">article 1</a>
        <a className="App-link" href="https://github.com/jpabadir" target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ClassTest from './components/ClassTest';

function App() {
  return (
    <div className="App">
      <ClassTest />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Offline, Online } from "react-detect-offline";
function App() {

  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>/src/App.js</code> and save to reload.
          Edit <code>/src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>
            <Online>Only shown Online (surprise!)</Online>
            <Offline>Only shown offline (surprise!)</Offline>
        </header>
    </div>
  );
}

export default App;

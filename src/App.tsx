import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kittdoodlez</h1>
      </header>
      <Home />
      <footer>
        <InstagramIcon />
        <a href="https://www.instagram.com/kittdoodlez">
          Instagram
        </a>
      </footer>
    </div>
  );
}

export default App;

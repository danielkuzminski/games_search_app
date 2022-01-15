import './App.css';
import Search from './components/Search'
import ScrollBar from './components/ScrollBar';
import ToTopButton from './components/ToTopButton';

function App() {
  
  return (
    <div className="App">
      <ScrollBar />
      <Search />
      <ToTopButton />
    </div>
  );
}

export default App;

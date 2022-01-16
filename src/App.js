import './App.css';
import Search from './components/Search'
import ScrollBar from './components/ScrollBar';
import ToTopButton from './components/ToTopButton';
import NewGameForm from './components/NewGameForm';
import Hamburger from './components/Hamburger';
import { useState } from 'react';

function App() {
  
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <ScrollBar />
      <Hamburger handleShow={handleShow}/>
      {show && <NewGameForm handleShow={handleShow} />}
      <Search />
      <ToTopButton />
    </div>
  );
}

export default App;

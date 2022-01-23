import './App.css';
import Search from './components/Search';
import ScrollBar from './components/ScrollBar';
import ToTopButton from './components/ToTopButton';
import NewGameForm from './components/NewGameForm';
import Hamburger from './components/Hamburger';
import CookieConsent from 'react-cookie-consent';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='App'>
      <ScrollBar />
      <Hamburger handleShow={handleShow} />
      {show && <NewGameForm handleShow={handleShow} />}
      <Search />
      <ToTopButton />
      <CookieConsent>
        This website uses cookies to enhance the user experience. To find out more, please read our terms and policy
      </CookieConsent>
    </div>
  );
}

export default App;

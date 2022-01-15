import './ToTopButton.css';
import { useEffect } from 'react';
import arrowUp from '../assets/arrow_up_24.png'

export default function ToTopButton() {
  const visibilityOnPx = 100;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > visibilityOnPx) {
        document.querySelector('.to-top').classList.remove('hide');
      } else {
        document.querySelector('.to-top').classList.add('hide');
      }
    });

    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div className='to-top-btn-wrapper'>
      <button
        className='to-top hide'
        onClick={() => {
          document.body.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img className='arrow-up' src={arrowUp} />
      </button>
    </div>
  );
}

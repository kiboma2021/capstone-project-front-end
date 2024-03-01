import { useState, useEffect } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import logo from '../assets/boooks.png';
import burger from '../assets/burger-black.png';

export default function NavPanel() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const smallScreen = useMediaQuery('only screen and (max-width: 1000px)');
  const bigScreen = useMediaQuery('only screen and (min-width: 1001px)');

  const handleBurgerClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleOverlayClick = () => {
    setIsMenuVisible(false);
  };

  useEffect(() => {
    if (bigScreen) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  }, [bigScreen]);
  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
    <>
      {smallScreen && isMenuVisible && (
      <div
        className="navigator__overlay"
        onClick={handleOverlayClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleOverlayClick();
          }
        }}
        role="button"
        tabIndex={0}
      />
      )}
      {smallScreen && (
        <div
          className="burger-container"
          onClick={handleBurgerClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleBurgerClick();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <img className={`burger${isMenuVisible ? ' invisible' : ''}`} alt="nav icon" src={burger} />
        </div>
      )}
      <nav className={`navigator${isMenuVisible ? ' visible' : ''}`}>
        <img src={logo} className="logo" alt="Web logo" />
        <NavLink className="link-nav" to="/">BOOKS LIST</NavLink>
        <NavLink className="link-nav" to="/create-book">ADD BOOK</NavLink>
        <NavLink className="link-nav" to="/delete-book">DELETE BOOK</NavLink>
        <NavLink className="link-nav" to="/reserve-book">RESERVE</NavLink>
        <NavLink className="link-nav" to="/reservations">RESERVATIONS</NavLink>
        <Logout />
      </nav>
    </>
  );
}

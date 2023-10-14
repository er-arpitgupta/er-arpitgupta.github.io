import { useState } from 'react';
import { IMAGE_LIST, NAVBAR } from '../../../utils/constants';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    const darkLight = document.body.className;
    if (darkLight === 'light') {
      setIsDarkMode(true);
      document.body.className = 'dark';
    } else {
      setIsDarkMode(false);
      document.body.className = 'light';
    }
  };

  return (
    <div className="banner">
      <a href="/" className="logo">
        A<span className="hidden">rpit </span>G
        <span className="hidden">upta</span>
      </a>
      <input className="menu-button" type="checkbox" id="menu-button" />
      <label className="menu-icon" htmlFor="menu-button">
        <span className="navicon"></span>
      </label>

      <div className="darkmode-parent">
        <input type="checkbox" id="darkmode" style={{ display: 'none' }} />
        <label htmlFor="darkmode" onClick={() => handleDarkMode()}>
          {isDarkMode ? (
            <img className="moon" src={IMAGE_LIST['moon.svg']} alt="" />
          ) : (
            <img className="sun" src={IMAGE_LIST['sun.svg']} alt="" />
          )}
        </label>
      </div>

      <ul className="menu">
        {Object.keys(NAVBAR).map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item}`}>
                <img src={IMAGE_LIST[`${item}.svg`]} alt={item} />
                <span className="nav-name">{NAVBAR[item]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { useState } from 'react';
import '../templates-css/Hamburger1.css';
import '../templates-css/Hamburger2.css';
import '../templates-css/Hamburger3.css';

export default function Hamburger() {
  const [menu, isMenu] = useState(false);

  return (
    <div className="hamburger" id="hamburger">
      <p className="heading">Hamburger</p>

      <div className="content">
        <div className="box3">
          <div className="hamburger1">
            <input
              className="hamburger1-menu-button"
              type="checkbox"
              id="hamburger1-menu-button"
            />
            <label
              className="hamburger1-menu-icon"
              for="hamburger1-menu-button"
            >
              <span className="navicon"></span>
            </label>
          </div>
        </div>

        <div className="box3">
          <label className="hamburger2" for="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="box3">
          <div className="hamburger3">
            <div className="hamburger3-wrapper">
              <span className="inner" onClick={() => isMenu(!menu)}>
                {menu ? 'MENU' : 'CLOSE'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

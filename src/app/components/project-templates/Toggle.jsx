import { IMAGE_LIST } from '../../../utils/constants';
import '../templates-css/Toggle1.css';
import '../templates-css/Toggle2.css';

export default function Toggle() {
  return (
    <div className="toggle" id="toggle">
      <p className="heading">Toggles</p>

      <div className="content">
        <div className="box">
          <div className="darkmode-toggle-parent">
            <input
              type="checkbox"
              name="darkmode-toggle"
              id="darkmode-toggle"
              style={{ display: 'none' }}
            />
            <label htmlFor="darkmode-toggle">
              <img className="sun" src={IMAGE_LIST['sun.svg']} alt="sun" />
              <img className="moon" src={IMAGE_LIST['moon.svg']} alt="moon" />
            </label>
          </div>
        </div>

        <div className="box">
          <div className="language-toggle">
            <input
              type="checkbox"
              name="language-toggle"
              id="language-toggle"
              style={{ display: 'none' }}
            />
            <label htmlFor="language-toggle">
              <span className="fr">FR</span>
              <span className="en">EN</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

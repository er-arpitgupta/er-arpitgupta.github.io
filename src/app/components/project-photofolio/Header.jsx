import { Link } from 'react-router-dom';
import { IMAGE_LIST } from '../../../utils/constants';

export default function Header() {
  return (
    <div className="photofolio-header" id="home">
      <div className="photofolio-header-container">
        <Link to="/" style={{ height: '35px' }}>
          <img
            className="back-arrow"
            src={IMAGE_LIST[`back-arrow.svg`]}
            alt=""
          />
        </Link>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li className="header-title">
            PhotoFolio<span className="photofolio-special">.</span>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="photofolio-mobile-view" style={{ display: 'none' }}></div>
    </div>
  );
}

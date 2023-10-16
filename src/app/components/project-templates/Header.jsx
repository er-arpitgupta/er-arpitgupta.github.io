import { Link } from 'react-router-dom';
import {
  GITHUB,
  IMAGE_LIST,
  INTRO,
  LINKEDIN,
  MAIL_ID,
} from '../../../utils/constants';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ height: '35px' }}>
        <img className="back-arrow" src={IMAGE_LIST[`back-arrow.svg`]} alt="" />
      </Link>
      <span className="banner-heading">CSS Templates</span>
      <div className="social-links">
        {Object.keys(INTRO).map((item, index) => {
          return (
            <img
              key={index}
              src={IMAGE_LIST[`${item}.svg`]}
              alt={INTRO[item]}
              onClick={() =>
                window.open(
                  item === 'gmail'
                    ? `mailto:${MAIL_ID}`
                    : item === 'linkedin'
                    ? LINKEDIN
                    : GITHUB
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
}

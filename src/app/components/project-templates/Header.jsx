import { useNavigate } from 'react-router-dom';
import {
  GITHUB,
  IMAGE_LIST,
  INTRO,
  LINKEDIN,
  MAIL_ID,
} from '../../../utils/constants';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        className="back-arrow"
        src={IMAGE_LIST[`back-arrow.svg`]}
        alt="back-arrow"
        onClick={navigate('/')}
      />
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

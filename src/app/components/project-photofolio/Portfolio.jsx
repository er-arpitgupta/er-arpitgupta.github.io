import { useState } from 'react';
import {
  PHOTOFOLIO_COMPRESSED,
  PORTFOLIO_OPTIONS,
} from '../../../utils/constants';
import Popup from './Popup';

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState(false);

  const handleImageClick = value => {
    setImage(value);
    setShowPopup(true);
  };

  const handleOptionClick = key => {
    setActive(key);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-header">
        <span>Portfolio</span>
        <div className="heading-options">
          {Object.keys(PORTFOLIO_OPTIONS).map(key => {
            return (
              <span
                className={key === active && 'active'}
                onClick={() => handleOptionClick(key)}
              >
                {PORTFOLIO_OPTIONS[key]}
              </span>
            );
          })}
        </div>
      </div>
      <div className="portfolio-photos">
        {[0, 1, 2].map(idx => {
          return (
            <div className="portfolio-column">
              {Object.keys(PHOTOFOLIO_COMPRESSED).map((key, index) => {
                return (
                  index % 3 === idx && (
                    <img
                      key={key}
                      src={PHOTOFOLIO_COMPRESSED[key]}
                      alt=""
                      onClick={() => handleImageClick(key)}
                      style={{
                        cursor: 'pointer',
                        width: '100%',
                        display:
                          active === 'all'
                            ? ''
                            : !key.startsWith(active) && 'none',
                      }}
                    />
                  )
                );
              })}
            </div>
          );
        })}
      </div>
      {showPopup && <Popup image={image} handlePopupClose={handlePopupClose} />}
    </div>
  );
}

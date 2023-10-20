import { PHOTOFOLIO_IMAGE_LIST } from '../../../utils/constants';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <span>Portfolio</span>
        <div className="heading-options">
          <input type="radio" name="option" id="option" />
          <input type="radio" name="option" id="option" />
          <input type="radio" name="option" id="option" />
          <input type="radio" name="option" id="option" />
          <input type="radio" name="option" id="option" />
          <input type="radio" name="option" id="option" />
        </div>
      </div>
      <div className="portfolio-photos">
        {Object.keys(PHOTOFOLIO_IMAGE_LIST).map((key, index) => {
          return <img key={key} src={PHOTOFOLIO_IMAGE_LIST[key]} alt="" />;
        })}
      </div>
    </div>
  );
}

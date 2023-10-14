import { IMAGE_LIST, TEMPLATES } from '../../../utils/constants';

export default function Section() {
  return (
    <div className="section">
      <p className="heading">Section</p>
      <ul>
        {Object.keys(TEMPLATES).map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item}`}>
                <img src={IMAGE_LIST[`${item}.svg`]} alt={item} />
                <span>{TEMPLATES[item]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

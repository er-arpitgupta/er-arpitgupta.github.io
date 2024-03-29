import { Link } from 'react-router-dom';
import { IMAGE_LIST, WORK_PROJECTS } from '../../../utils/constants';
import beforeSection from '../../../utils/helper';

export default function Work() {
  return (
    <div className="work" id="work">
      {beforeSection('Take a look at my', 'Projects')}
      <div className="content">
        {Object.keys(WORK_PROJECTS).map((key, index) => {
          return (
            <Link
              to={
                key === 'photofolio'
                  ? '/photofolio'
                  : key === 'templates'
                  ? '/templates'
                  : '/'
              }
              key={index}
              className="project"
            >
              <img src={IMAGE_LIST[`${key}.png`]} alt={key} />
              <div className="project-content">
                <p className="project-heading">{WORK_PROJECTS[key][0]}</p>
                <p>
                  Technologies: <br className="line-break" />
                  <span className="special">{WORK_PROJECTS[key][1]}</span>
                </p>
                <ul>
                  <li>{WORK_PROJECTS[key][2]}</li>
                  <li>{WORK_PROJECTS[key][3]}</li>
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

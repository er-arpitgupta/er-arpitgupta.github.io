import { IMAGE_LIST, SKILLS, TOOLS } from '../../../utils/constants';
import beforeSection from '../../../utils/helper';

export default function Skills() {
  return (
    <div className="skills" id="skills">
      {beforeSection('Check out my', 'Skills')}
      <div className="content">
        <div className="skill-set">
          <span className="title">Skills</span>
          <div className="skill-logos">
            {Object.keys(SKILLS).map((item, index) => {
              return (
                <div className="box" key={index}>
                  <img src={IMAGE_LIST[`${item}.svg`]} alt={item} />
                  <span>{SKILLS[item]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tools">
          <span className="title">Tools</span>
          <div className="tools-logos">
            {Object.keys(TOOLS).map((item, index) => {
              return (
                <div className="box" key={index}>
                  <img src={IMAGE_LIST[`${item}.svg`]} alt={item} />
                  <span>{TOOLS[item]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

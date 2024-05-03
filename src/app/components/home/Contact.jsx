import {
  GITHUB,
  IMAGE_LIST,
  INTRO,
  LINKEDIN,
  MAIL_ID,
} from '../../../utils/constants';
import beforeSection from '../../../utils/helper';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      {beforeSection('Say Hello', 'Contact')}
      <div className="content">
        <span style={{marginBottom: '20px'}}>Get in touch</span>
        <div className="links">
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
    </div>
  );
}

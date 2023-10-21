import {
  GITHUB,
  IMAGE_LIST,
  INTRO,
  LINKEDIN,
  MAIL_ID,
} from '../../../utils/constants';

export default function Contact() {
  return (
    <div className="photofolio-contact" id="contact">
      <span className="contact-heading">Get in Touch</span>
      <div className="contact-details">
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

import { GITHUB, LINKEDIN, MAIL_ID } from '../../../utils/constants';
import beforeSection from '../../../utils/helper';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      {beforeSection('Say Hello', 'Contact')}
      <div className="content">
        <div className="form">
          <span className="form-heading">Get in touch</span>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="email" placeholder="Your Email" />
          <input type="text" name="message" placeholder="Your Message" />
          <div className="form-buttons">
            <input type="submit" name="submit" value="Send" />
            <input type="reset" name="reset" value="Clear" />
          </div>
        </div>
        <div className="contact-detail">
          <div>
            <span className="detail-heading">Email</span>
            <span className="detail-link">{MAIL_ID}</span>
          </div>
          <div>
            <span className="detail-heading">LinkedIn</span>
            <span className="detail-link">{LINKEDIN}</span>
          </div>
          <div>
            <span className="detail-heading">GitHub</span>
            <span className="detail-link">{GITHUB}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

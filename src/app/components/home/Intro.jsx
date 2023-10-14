import {
  INTRO,
  MAIL_ID,
  LINKEDIN,
  GITHUB,
  IMAGE_LIST,
} from '../../../utils/constants';

export default function Intro() {
  return (
    <div className="home">
      <img
        className="photo"
        src={IMAGE_LIST['ArpitGupta-ProfilePic.jpg']}
        alt=""
      />
      <div className="home-content">
        <div className="intro">
          <p>Hello World! I'm</p>
          <p>Arpit Gupta</p>
          <p>
            A versatile <span className="special">Full-Stack Developer</span>{' '}
            with strong foundation in back-end and front-end technologies, adept
            at creating innovative and efficient web solutions that deliver
            exceptional user experiences.
          </p>
        </div>
        <div className="buttons">
          <a
            href="ArpitResume.pdf"
            className="resume"
            download="ArpitGupta_Resume"
          >
            Resume
          </a>
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
    </div>
  );
}

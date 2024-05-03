import myphoto from '../../../assets/images/Arpit-Photofolio.png';

export default function About() {
  return (
    <div className="photofolio-about" id='about'>
      <span className="about-heading">About</span>
      <div className="about-body">
        <img src={myphoto} alt="" />
        <div className="about-content">
          <span>Arpit Gupta,</span>
          <span>UI Developer at EY</span>
          <p>
            I love to keep up my process of learning to figure out better ways
            of solving problems. Moreover, I love to compete with my own past
            performances rather than competing with my peers, as I believe that
            improvement is always better than perfection
          </p>
        </div>
      </div>
    </div>
  );
}

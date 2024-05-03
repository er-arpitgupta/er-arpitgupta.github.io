import { IMAGE_LIST } from '../../../utils/constants';

export default function Intro() {
  return (
    <div className="home" id="home">
      <img className="photo" src={IMAGE_LIST['ArpitGupta.jpg']} alt="" />
      <div className="home-content">
        <h6>Hello World! I'm</h6>
        <h1>Arpit Gupta</h1>
        <h4>
          A <u className="special">pro</u>grammer with strong foundation in
          front-end technologies, adept at creating innovative and efficient web
          solutions that deliver exceptional user experiences.
        </h4>
      </div>
    </div>
  );
}

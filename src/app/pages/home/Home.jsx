import {
  Header,
  Intro,
  About,
  Skills,
  Work,
  Contact,
  Footer,
} from '../../components/home';

import './Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className="outer" id="home">
        <Intro />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

import { useState } from 'react';
import {
  Header,
  Featured,
  Portfolio,
  About,
  Contact,
  Footer,
} from '../../components/project-photofolio';
import Login from '../login/Login';

import './Photofolio.css';

export default function Photofolio() {
  const [login, isLogin] = useState(false);

  const setLogin = () => {
    isLogin(true);
    const link = document.querySelector('link[rel="icon"]');
    link.setAttribute('href', 'photofolio.png');
    document.title = 'Arpit Gupta | PhotoFolio';
  };

  return (
    <>
      {login ? (
        <div className="photofolio-container">
          <Header />
          <Featured />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
        </div>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </>
  );
}

import { useState } from 'react';
import {
  Header,
  Footer,
  Section,
  Dropdown,
  Toggle,
  Hamburger,
} from '../../components/project-templates';
import Login from '../login/Login';

import './Templates.css';

export default function Templates() {
  const [login, isLogin] = useState(false);

  const setLogin = () => {
    isLogin(true);
  };

  return (
    <>
      {login ? (
        <div className="templates-container">
          <Header />
          <div className="container">
            <Section />
            <Dropdown />
            <Toggle />
            <Hamburger />
          </div>
          <Footer />
        </div>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </>
  );
}

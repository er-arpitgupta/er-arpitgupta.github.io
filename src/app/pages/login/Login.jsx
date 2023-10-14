import { useState } from 'react';
import { LOGIN_PWD, LOGIN_USER } from '../../../utils/constants';
import './Login.css';

const Login = ({ setLogin }) => {
  const [password, setPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="hidden-div"></div>
      <input type="text" name="username" value={LOGIN_USER} disabled />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
      />
      <button
        className={password === LOGIN_PWD ? 'login-active' : 'login-disable'}
        type="submit"
        onClick={setLogin}
        disabled={!(password === LOGIN_PWD)}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;

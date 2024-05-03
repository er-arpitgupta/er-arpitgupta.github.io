import { useEffect, useState } from 'react';
import { LOGIN_PWD, LOGIN_USER } from '../../../utils/constants';
import './Login.css';

const Login = ({ setLogin }) => {
  const [password, setPassword] = useState(false);

  useEffect(() => {
    document.title = 'Login';
  });

  return (
    <div className="login-container">
      <span>{LOGIN_USER}</span>
      <input
        type="password"
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

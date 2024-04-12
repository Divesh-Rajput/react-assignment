import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Login.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
      navigate('/dash');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError(' Username and Password are required');
      return;
    }

    if (username === 'Admin' && password === 'Admin@123') {
      localStorage.setItem('login', true);
      navigate('/dash');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-login ">
      <div className="bg-login h-100 w-100">
        <div className="login-center">
          <h2>Welcome back</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="justify-content-center mb-3">
                <div>
                  <label>Username</label>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />{' '}
                {error && !username && (
                  <div className="error">Username is required</div>
                )}
              </div>

              <div className=" mb-3">
                <div>
                  {' '}
                  <label>Password:</label>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && !password && (
                  <div className="error">Password is required</div>
                )}
                {error && username && password && (
                  <div className="error">Invalid username or password</div>
                )}
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

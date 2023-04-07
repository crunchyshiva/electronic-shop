import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  }

  const handleForgotPassword = () => {
    setForgotPassword(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do login here with username, password, and remember values
    console.log('Login submitted:', { username, password, remember });

    // Reset fields
    setUsername('');
    setPassword('');
    setRemember(false);
  }

  if (forgotPassword) {
    return (
      <div className="login-container">
        <h1>Forgot Password</h1>
        <p>Please enter your email to reset your password:</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <div className="login-checkbox">
          <label>
            <input type="checkbox" checked={remember} onChange={handleRememberChange} />
            Remember Me
          </label>
          <span onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
        <button type="submit">Login</button>
        <div>
          <p>New User? Please Sign up</p>
          <a className =""href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;

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
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <div className="login-checkbox">
          <label>
            <input type="checkbox" checked={remember} onChange={handleRememberChange} />
            <span>Remember Me</span>
          </label>
          <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
        <button type="submit">Login</button>
        <div className="signup">
          <p>New User? Please <a href="#">Sign up</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;

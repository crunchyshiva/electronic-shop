import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      mobile,
      password,
      confirmPassword,
    });
  };

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className='signup-colunm'>
        <div className="form-group">
          <label htmlFor="firstName"><FontAwesomeIcon icon={faUser} /> First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName"><FontAwesomeIcon icon={faUser} /> Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobile"><FontAwesomeIcon icon={faMobileAlt} /> Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password"><FontAwesomeIcon icon={faLock} /> Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword"><FontAwesomeIcon icon={faLock} /> Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={6}
          required
        />
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default SignUpForm;

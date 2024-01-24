import React from 'react';

import {useSignup} from '../../hooks/useSignup';

import './signup.css';

function Signup() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {error, signup} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  }

  return (
    <div>
      <h2> Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className='btn'>Sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
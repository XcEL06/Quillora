import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://quillora-5ddm.onrender.com/api/auth/login',
        { email, password }
      );
      localStorage.setItem('quillora_user', JSON.stringify(res.data));
      alert('Logged in');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className='container card'>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
            }

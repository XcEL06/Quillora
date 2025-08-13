import React, {useState} from 'react';
import axios from 'axios';
export default function Register(){
  const [username,setUsername]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const submit = async e => {
    e.preventDefault();
    try{
      const res = await axios.post'https://quillora-5ddm.onrender.com/api/auth/register',{username,email,password});
      localStorage.setItem('quillora_user', JSON.stringify(res.data));
      alert('Registered');
    }catch(err){ alert(err.response?.data?.message || 'Error'); }
  };
  return (<div className='container card'><h2>Register</h2><form onSubmit={submit}><input placeholder='username' value={username} onChange={e=>setUsername(e.target.value)} /><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} /><input placeholder='password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><button>Register</button></form></div>);
}

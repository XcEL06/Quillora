import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Profile(){
  const {id} = useParams();
  const [user,setUser]=useState(null);
  useEffect(()=>{ axios.get'https://quillora-5ddm.onrender.com/api/users/profile/'+id.then(r=>setUser(r.data)); },[id]);
  if(!user) return <div className='container'>Loading...</div>;
  return (<div className='container'><h2>{user.username}</h2><p>{user.bio}</p></div>);
}

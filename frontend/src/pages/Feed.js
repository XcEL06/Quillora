import React, {useEffect,useState} from 'react';
import axios from 'axios';
export default function Feed(){
  const [posts,setPosts]=useState([]);
  useEffect(()=>{ axios.get'https://quillora-5ddm.onrender.com/api/posts/feed'.then(r=>setPosts(r.data)); },[]);
  return (<div className='container'>{posts.map(p=> (<div key={p._id} className='card'><h4>{p.author.username}</h4><p>{p.content}</p>{p.mediaUrl && <audio controls src={'http://localhost:5000'+p.mediaUrl}></audio>}</div>))}</div>);
}

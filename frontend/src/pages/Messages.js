import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
const socket = io'https://quillora-5ddm.onrender.com';
export default function Messages(){
  const [messages,setMessages]=useState([]); const [text,setText]=useState('');
  useEffect(()=>{ socket.on('receive_message', m=> setMessages(prev=>[...prev,m])); },[]);
  const send = ()=>{ socket.emit('send_message', {to:null, from:null, text}); setText(''); };
  return (<div className='container'><h2>Messages</h2><div className='card' style={{minHeight:200}}>{messages.map((m,i)=><div key={i}>{m.text || m}</div>)}</div><input value={text} onChange={e=>setText(e.target.value)} /><button onClick={send}>Send</button></div>);
}

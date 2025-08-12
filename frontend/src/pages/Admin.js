=== FILE: frontend/src/pages/Admin.js ===
import React,{useEffect,useState} from 'react'; import axios from 'axios';
export default function Admin(){ const [reports,setReports]=useState([]); useEffect(()=>{ axios.get('http://localhost:5000/api/admin/reports').then(r=>setReports(r.data)).catch(()=>{}); },[]); return (<div className='container'><h2>Admin</h2>{reports.map(r=>(<div key={r._id} className='card'><p>{r.reason}</p></div>))}</div>); }

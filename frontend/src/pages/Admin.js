import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get('https://quillora-5ddm.onrender.com')
      .then(r => setReports(r.data))
      .catch(() => {});
  }, []);

  return (
    <div className='container'>
      <h2>Admin</h2>
      {reports.map(r => (
        <div key={r._id} className='card'>
          <p>{r.reason}</p>
        </div>
      ))}
    </div>
  );
        }

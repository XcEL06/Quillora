import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get('https://quillora-5ddm.onrender.com/api/groups')
      .then((r) => setGroups(r.data))
      .catch((err) => console.error(err));
  }, []);

  const create = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('quillora_user'))?.token;

    try {
      const res = await axios.post(
        'https://quillora-5ddm.onrender.com/api/groups',
        { name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setGroups([...groups, res.data]); // Update list without refresh
      setName('');
      alert('Group Created');
    } catch (err) {
      alert(err.response?.data?.message || 'Error creating group');
    }
  };

  return (
    <div className="container">
      <h2>Groups</h2>
      <form onSubmit={create}>
        <input
          placeholder="Group name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Create</button>
      </form>

      {groups.map((g) => (
        <div key={g._id} className="card">
          <h4>{g.name}</h4>
          <p>{g.description}</p>
        </div>
      ))}
    </div>
  );
    }

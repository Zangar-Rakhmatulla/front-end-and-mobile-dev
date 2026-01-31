import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        setLoading(true); 
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: signal, 
        });

        if (!response.ok) {
          throw new Error('Қате орын алды!');
        }

        const data = await response.json();
        setUser(data); 
        setLoading(false); 
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Сұрау тоқтатылды');
        } else {
          setError(err.message); 
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort(); 
    };
  }, [userId]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserProfile;

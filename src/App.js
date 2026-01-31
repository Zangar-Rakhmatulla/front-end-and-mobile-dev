// src/App.js
import React, { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [userId, setUserId] = useState(1); // Алғашқы пайдаланушы ID

  return (
    <div>
      <h1>User Profile App</h1>
      <UserProfile userId={userId} /> {/* userId пропсы беріледі */}
      <div>
        {/* userId өзгерту үшін кнопкалар */}
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
      </div>
    </div>
  );
}

export default App;

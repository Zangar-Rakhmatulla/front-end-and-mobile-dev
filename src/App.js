// src/App.js
<<<<<<< HEAD
import FragmentLayout from "./components/task1/FragmentLayout";
import Combined from "./components/task1/Combined";
import Section from "./components/task2/Section";
import ProductList from "./components/task2/ProductList";

function App() {
  return (
    <div className="App">
      <FragmentLayout />
      <Combined />
      <Section title="Products">
        <ProductList />
      </Section>
=======
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
>>>>>>> 7bbb53680147fc6601a8fd253995418e02027155
    </div>
  );
}

export default App;

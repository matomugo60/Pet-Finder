import React, { useState } from 'react';

function AddPet({ user }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to backend API to add a new pet for the current user
    fetch('/api/pets', {
      method: 'POST',
      body: JSON.stringify({ name, breed, owner: user.id }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Add Pet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPet;

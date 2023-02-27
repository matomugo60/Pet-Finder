import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditPet({ user }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const { petId } = useParams();

  useEffect(() => {
    // Send a GET request to backend API to fetch the details of the selected pet
    fetch(`/api/pets/${petId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.pet.owner === user.id) {
          setName(data.pet.name);
          setBreed(data.pet.breed);
        } else {
          console.log('You do not have permission to edit this pet.');
        }
      })
      .catch((error) => console.error(error));
  }, [petId, user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a PUT request to backend API to update the details of the selected pet
    fetch(`/api/pets/${petId}`, {
      method: 'PUT',
      body: JSON.stringify({ name, breed }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Pet details updated successfully.');
    console.log(data.pet);
    })
    .catch((error) => console.error(error));
    };
    
    return (
    <div>
    <h1>Edit Pet Details</h1>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="name">Name:</label>
    <input
    type="text"
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>
    <div>
    <label htmlFor="breed">Breed:</label>
    <input
    type="text"
    id="breed"
    value={breed}
    onChange={(e) => setBreed(e.target.value)}
    />
    </div>
    <button type="submit">Update Details</button>
    </form>
    </div>
    );
    }
    
    export default EditPet;

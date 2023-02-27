import React, { useState, useEffect } from 'react';

function PetList({ user }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Send a GET request to backend API to fetch all pets for the current user
    fetch(`/api/pets?owner=${user.id}`)
      .then((response) => response.json())
      .then((data) => setPets(data.pets))
      .catch((error) => console.error(error));
  }, [user.id]);

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} ({pet.breed})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;

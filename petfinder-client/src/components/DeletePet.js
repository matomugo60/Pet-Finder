import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DeletePet({ user, history }) {
  const params = useParams();

  useEffect(() => {
    // Send a DELETE request to backend API to delete the selected pet
    fetch(`/api/pets/${params.petId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Pet deleted successfully.');
        console.log(data.pet);
        history.push('/pets');
      })
      .catch((error) => console.error(error));
  }, [params.petId, history]);

  return <div>Deleting pet...</div>;
}

export default DeletePet;

import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function DeletePet({ user }) {
const { petId } = useParams();
const history = useHistory();

useEffect(() => {
// Send a DELETE request to backend API to delete the selected pet
fetch(`/api/pets/${petId}`, {
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
}, [petId, history]);

return <div>Deleting pet...</div>;
}

export default DeletePet;


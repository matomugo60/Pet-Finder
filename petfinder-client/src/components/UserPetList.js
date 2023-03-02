import React, { useState, useEffect } from "react";
import axios from "axios";
const UserPetList = () => {
  const [pets, setPets] = useState([]);
  const [petForm, setPetForm] = useState({
    name: "",
    breed: "",
    image: "",
  });

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get("http://localhost:9292/user-pets");
      setPets(response.data);
    };

    fetchPets();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPetForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:9292/user-pets", {
      ...petForm,
      comments: [],
    });

    setPets([...pets, response.data]);
    setPetForm({ name: "", breed: "", image: "" });
  };

  const handleCommentSubmit = async (petId, comment) => {
    const updatedPets = pets.map((pet) => {
      if (pet.id === petId) {
        return {
          ...pet,
          comments: [...pet.comments, comment],
        };
      } else {
        return pet;
      }
    });

    await axios.patch(`http://localhost:9292/user-pets/${petId}`, {
      comments: updatedPets.find((pet) => pet.id === petId).comments,
    });

    setPets(updatedPets);
  };

  const handleDeletePet = async (petId) => {
    await axios.delete(`http://localhost:9292/user-pets/${petId}`);

    const updatedPets = pets.filter((pet) => pet.id !== petId);
    setPets(updatedPets);
  };


  return (
    <div>
      <h1 className="text-center mb-4">My Pet List</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={petForm.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={petForm.breed}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={petForm.image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className="btn btn-primary mb-4">Add Pet</button>
      </form>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            <p>
              {pet.name} - {pet.breed}
            </p>
            <ul>
              {pet.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleCommentSubmit(pet.id, event.target.comment.value);
                event.target.comment.value = "";
              }}
            >
              <label>
                Comment:
                <input type="text" name="comment" />
              </label>
              <button type="submit">            Add Comment</button>
        </form>
        <button onClick={() => handleDeletePet(pet.id)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
);
};

export default UserPetList;

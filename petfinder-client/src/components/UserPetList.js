import { useState } from "react";

const UserPetList = () => {
  const [petList, setPetList] = useState([]);

  const [newPet, setNewPet] = useState({ id: "", name: "", breed: "", owner: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleAddPet = (event) => {
    event.preventDefault();
    setPetList([...petList, newPet]);
    setNewPet({ id: "", name: "", breed: "", owner: "" });
  };

  const handleDeletePet = (petId) => {
    const updatedPetList = petList.filter((pet) => pet.id !== petId);
    setPetList(updatedPetList);
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleAddPet}>
        <div className="form-group">
          <label htmlFor="id">Pet Id:</label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            value={newPet.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Pet Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newPet.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="breed">Pet Breed:</label>
          <input
            type="text"
            className="form-control"
            id="breed"
            name="breed"
            value={newPet.breed}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner Name:</label>
          <input
            type="text"
            className="form-control"
            id="owner"
            name="owner"
            value={newPet.owner}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Pet
        </button>
      </form>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Pet Id</th>
            <th>Pet Name</th>
            <th>Pet Breed</th>
            <th>Owner Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {petList.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.breed}</td>
              <td>{pet.owner}</td>
              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDeletePet(pet.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPetList;

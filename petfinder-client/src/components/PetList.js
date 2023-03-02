import React, { useState, useEffect } from "react";
import axios from "axios";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://matomugo60.github.io/db/db.json");
        setPets(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const filteredPets = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container mt-5">
      <div className="card">
        <img className="card-img-top" src="https://i.pinimg.com/736x/dc/94/14/dc9414307d310d72334055e628ba3d93.jpg" alt="Petfinder" />
        <div className="card-body">
          <h1 className="card-title">Welcome to Petfinder!</h1>
          <p className="card-text">
            Petfinder is an app that helps you find adoptable pets in your area.
            With our powerful search tools, you can easily filter through thousands
            of pets to find the perfect match for your family. Whether you're looking
            for a dog, cat, rabbit, or other furry friend, Petfinder has you covered.
          </p>
          <h1 className="text-center mb-4">Available Pets For Adoption</h1>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search pets..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
          </form>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="mt-4">
          {filteredPets.map((pet) => {
            return (
              <div className="card card-body col-6 mx-auto mb-4" key={pet.id}>
                <p>ID: {pet.id}</p>
                <p>Name: {pet.name}</p>
                <p>Breed: {pet.breed}</p>
                <p>Owner: {pet.ownerName}</p>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PetList;

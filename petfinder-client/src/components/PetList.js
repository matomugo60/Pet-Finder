import React, { useState, useEffect } from "react";
import axios from "axios";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:9292/pets`, {
          params: { searchTerm }
        });
        setPets(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center mb-4">Available Pets</h1>
      <form>
        <div className="form-group">
          <label>
            Search:
            <input
              type="text"
              name="searchTerm"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              <img src={pet.photo} alt={pet.name} />
              <p>
                {pet.name} - {pet.breed}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PetList;

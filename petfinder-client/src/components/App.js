import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import PetList from './PetList';
import UserPetList from './UserPetList';
import Register from './Register';



// import AddPet from './AddPet';
// import EditPet from './EditPet';
// import DeletePet from './DeletePet';

export default function App() {
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       {/* <Login />
       <Register />
      <PetList />
      <UserPetList /> */}


      <Routes>
        <Route path="/" element={< Register />} /> 
        <Route path="/pets" element={<PetList />}/>
        <Route path="/your-pets" element={<UserPetList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}



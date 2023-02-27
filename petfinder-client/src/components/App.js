import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

import './App.css';
import Login from './Login';
// import Register from './Register';
import PetList from './PetList';
import AddPet from './AddPet';
import EditPet from './EditPet';
import DeletePet from './DeletePet';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Petfinder</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/pets">View Your Pets</Link>
                </li>
                <li>
                  <Link to="/pets/new">Add a Pet</Link>
                </li>
                <li>
                  <button onClick={() => setUser(null)}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          {/* <Route path="/register">
            <Register setUser={setUser} />
          </Route> */}
          <Route exact path="/pets">
            <PetList user={user} />
          </Route>
          <Route path="/pets/new">
            <AddPet user={user} />
          </Route>
          <Route path="/pets/:petId/edit">
            <EditPet user={user} />
          </Route>
          <Route path="/pets/:petId/delete">
            <DeletePet user={user} />
          </Route>
          <Route path="/">
            <h1>Welcome to Petfinder</h1>
          </Route>
        
      </Router>
    </div>
  );
}

export default App;

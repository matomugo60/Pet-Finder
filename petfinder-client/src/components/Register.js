import React, { useState } from 'react';

function Register({ setUser }) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// Send a POST request to backend API to register user
fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => setUser(data.user))
    .catch((error) => console.error(error));
};

return (
<div>
<h1>Register</h1>
<form onSubmit={handleSubmit}>
<label>
Name:
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</label>
<br />
<label>
Email:
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
<br />
<label>
Password:
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</label>
<br />
<button type="submit">Submit</button>
</form>
</div>
);
}

export default Register;  
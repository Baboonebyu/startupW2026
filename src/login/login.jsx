

import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Register, login } from '../services';
import { useNavigate } from 'react-router-dom';


export function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');
const [randomScripture, setRandomScripture] = React.useState(null);




  async function doLogin() {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const user = await response.json();
      console.log('User after login:', user);
      setUser(user);
      navigate('/play');
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    alert('Login failed. Please try again.');
  }
}

 async function createUser(username, password) {
  try {
    const response = await fetch('/api/register', {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      alert('Registration failed');
    }
  } catch (error) {
    alert('Error registering user');
  }
}








  async function handleSubmit(event) {
    event.preventDefault();
    // Register new user 
    await createUser(username, password);
    await doLogin();
  }

  


  async function handleLogin(event) {
    event.preventDefault();
    // Attempt login
    await doLogin();
    
  }

  function handleGetScripture() {

    fetch('https://bible-api.com/data/web/random')
      .then((response) => response.json())
      .then((data) => {
        console.log('Scripture API response:', data);
        const verse = data.random_verse;
        const scripture = {
          Text: verse.text,
          Reference: verse.book + ' ' + verse.chapter + ':' + verse.verse
        };
        setRandomScripture(scripture);
      })
      .catch(() => {
        setRandomScripture({ Text: 'Failed to load scripture.', Reference: '' });
      });
    



    
  }








  return (
    <main className="container-fluid  text-center">
      <div className="login">
  <div className="box">
<h1>Welcome to Temple Match</h1>
<form onSubmit={handleLogin}>
  <div className="form-group">
    <label htmlFor="inputUsername">Username</label>
    <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="InputPassword1">Password</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <button type="button" className="btn btn-secondary" onClick={handleSubmit}>Create Account</button>
</form>
</div>
</div>


















<div className="button holder">

<div className ="leftbutton">
<a href="https://www.churchofjesuschrist.org/comeuntochrist/article/temples" className="btn btn-primary btn-lg" role="button" aria-pressed="true">Learn more</a>

</div>
<div className ="rightbutton">

<button type="button" className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={handleGetScripture}>
  Be Inspired
</button>
</div>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <h1>Inspirational scripture</h1>
        {randomScripture && (
          <>
            <p>{randomScripture.Text}</p>
            <p>{randomScripture.Reference}</p>
          </>
        )}
      </div>


    </div>
  </div>
</div>

</div>
    </main>
  );

 
}
 
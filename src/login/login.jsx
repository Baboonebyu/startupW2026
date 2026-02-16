

import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Register, login } from '../services';
import { useNavigate } from 'react-router-dom';


export function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');


  function doLogin(){
    const user = login(username, password);
    if (user) {
      setUser(user);
      navigate('/play');
     
    } else {
      alert('Invalid username or password');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Register new user
    Register(username, password);
    doLogin();
  }

  function handleLogin(event) {
    event.preventDefault();
    // Attempt login
    doLogin();
    
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

<button type="button" className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
  Be Inspired
</button>
</div>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Inspirational scripture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <h1>Inspirational scripture</h1>
        <p>And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.</p>
        <p>Acts 16:31</p>
        <p>The "Be Inspired" button will pull up a scripture from a 3rd party API.</p>

        </div>


    </div>
  </div>
</div>

</div>
    </main>
  );
}
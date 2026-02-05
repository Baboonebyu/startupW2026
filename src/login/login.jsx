import React from 'react';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="login">
  <div className="box">
<h1>Welcome to Temple Match</h1>
<form>
  <div className="form-group">
    <label htmlFor="inputUsername">Username</label>
    <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username"></input>
  </div>
  <div className="form-group">
    <label htmlFor="InputPassword1">Password</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
   <button type="submit" className="btn btn-secondary">Create Account</button>
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

<div className="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Inspirational scripture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <h1>Inspirational scripture</h1>
<p>And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.</p>
<p>Acts 16:31
    The be Inspired will pull up a scripture from a 3rd party ap
</p>

      </div>


    </div>
  </div>
</div>

</div>
    </main>
  );
}
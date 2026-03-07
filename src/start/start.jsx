import React, { useContext } from 'react';
import './start.css';
import { UserContext } from '../UserContext';
export function Play() {
    const { user } = useContext(UserContext);
    console.log('User in start page:', user);
  return (
    <main className=" body container-fluid  text-center startMain">
      
    <div className="boxStart">


    <h1>
         Welcome, {user && user.username ? user.username : "Guest"}!
</h1>
      
        <h1>
        Ready to
        Match?
    </h1>
    
    <a href="game" className="btn btn-primary btn-lg" role="button" aria-pressed="true">Let's go!</a>




    </div>

    </main>
  );
}
import React, { useContext } from 'react';
import './start.css';
import { UserContext } from '../UserContext';
export function Play() {
    const { user } = useContext(UserContext);
  return (
    <main className=" body container-fluid  text-center startMain">
      
    <div className="boxStart">


    <h1>
        Welcome, {user.username}!
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
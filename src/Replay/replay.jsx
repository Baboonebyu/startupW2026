import React, { useContext } from 'react';
import '../start/start.css';
import { UserContext } from '../UserContext';
import { useLocation } from 'react-router-dom';
export function Replay() {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const elapsed = location.state?.elapsed;
    function formatTime(ms) {
      if (typeof ms !== 'number') return '--:--:--';
      const minutes = Math.floor(ms / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      const centiseconds = Math.floor((ms % 1000) / 10);
      return (
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}:` +
        `${centiseconds.toString().padStart(2, '0')}`
      );
    }
  return (
    <main className=" body container-fluid  text-center startMain">
      
    <div className="boxStart">

    
    <h1>
        Well Done, {user.username}!
        </h1>
        <h1>
        You matched all the temples!
    </h1>
    <h2>
      Time: {formatTime(elapsed)}
    </h2>

    <div className="replay-btn-row">
      <a href="game" className="btn btn-primary btn-lg" role="button" aria-pressed="true">Play Again</a>
      <a href="scores" className="btn btn-primary btn-lg" role="button" aria-pressed="true">View Stats</a>
    </div>




    </div>

    </main>
  );
}
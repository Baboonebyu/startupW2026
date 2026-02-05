import React from 'react';
import './gameStyle.css';

export function Game() {
  return (
    <main className="container-fluid  text-center gameMain">
              <div className ="websocketInfo">
<p> websocketstuff</p>
<p>player gets high score</p>

</div>
        <div className="gameBoard">
            <div className = "card"> <img src="Temple photo library/bountiful.jpg" alt="bountiful" width="100%" height="100%"/></div>
            <div className = "card"> <img src="Temple photo library/brigham city.jpg" alt="brigham city" width="100%" height="100%"/></div>
            <div className = "card"> <p>Bountiful</p></div>
            <div className = "card"> <p>Brigham City</p></div>

            <div className = "card"> <img src="Temple photo library/layton.jpg" alt="layton" width="100%" height="100%"/></div>
            <div className = "card"> <img src="Temple photo library/logan.jpg" alt="logan" width="100%" height="100%"/></div>
            <div className = "card"> <p>Layton</p></div>
            <div className = "card"> <p>Logan</p></div>

            <div className = "card"> <img src="Temple photo library/saltlake.jpg" alt="salt lake" width="100%" height="100%"/></div>
            <div className = "card"> <img src="Temple photo library/ogden.jpg" alt="ogden" width="100%" height="100%"/></div>
            <div className = "card"> <p>Salt Lake</p></div>
            <div className = "card"> <p>Ogden</p></div>

            <div className = "card"> <img src="Temple photo library/smithfield.jpg" alt="smithfield" width="100%" height="100%"/></div>
            <div className = "card"> <img src="Temple photo library/syracuse.jpg" alt="syracuse" width="100%" height="100%"/></div>
            <div className = "card"> <p>Smithfield</p></div>
            <div className = "card"> <p>Syracuse</p></div>
        




        </div>
         <div class ="mobileHolder">

      <div class ="websocketInfoMobile">
<p> websocketstuff</p>
<p>player gets high score</p>

</div>
    </div>


    </main>
  );
}
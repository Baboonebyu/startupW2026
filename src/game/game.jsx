import React from 'react';
import './gameStyle.css';

export function Game() {
  return (
    <main className="container-fluid  text-center gameMain">
              <div className ="websocketInfo">
                <p>{Deck.length}</p>
<p> websocketstuff</p>
<p>player gets high score</p>

</div>
        <div className="gameBoard">
          {Deck.map((card, index) => (
            <div key={card.id} className="card">
              {card.image ? (
                <img src={card.image} alt ="Temple" width="100%" height="100%" />
              ) : (
                <p>{card.name}</p>
              )}
            </div>
          ))}

        




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

const Temples = [
  {id : 1, name: "Bountiful", image: "Temple photo library/bountiful.jpg"},
  {id : 2, name: "Brigham City", image: "Temple photo library/brigham city.jpg"},
  {id : 3, name: "Layton", image: "Temple photo library/layton.jpg"},
  {id : 4, name: "Logan", image: "Temple photo library/logan.jpg"},
  {id : 5, name: "Salt Lake", image: "Temple photo library/saltlake.jpg"},
  {id : 6, name: "Ogden", image: "Temple photo library/ogden.jpg"},
  {id : 7, name: "Smithfield", image: "Temple photo library/smithfield.jpg"},
  {id : 8, name: "Syracuse", image: "Temple photo library/syracuse.jpg"},
  {id : 9, name: "Cedar City", image: "Temple photo library/cedar city.jpg"},
  {id : 10, name: "Draper", image: "Temple photo library/draper.jpg"},
  {id : 11, name: "Jordan River", image: "Temple photo library/jordan river.jpg"},
  {id : 12, name: "Deseret Peaks", image: "Temple photo library/deseret peaks.jpg"},
  {id : 13, name: "Manti", image: "Temple photo library/manti.jpg"},
  {id : 14, name: "Monticello", image: "Temple photo library/monticello.jpg"},
  {id : 15, name: "Ephraim", image: "Temple photo library/ephraim.jpg"},
  {id : 16, name: "Payson", image: "Temple photo library/payson.jpg"},
  {id : 17, name: "Provo City Center", image: "Temple photo library/provo city center.jpg"},
  {id : 18, name: "Lindon", image: "Temple photo library/lindon.jpg"},
  {id : 19, name: "Mt. Timpanogos", image: "Temple photo library/mt timpanogos.jpg"},
  {id : 20, name: "Oquirrh Mountain", image: "Temple photo library/oquirrh mountain.jpg"},
  {id : 21, name: "Orem", image: "Temple photo library/orem.jpg"},
  {id : 22, name: "Red Cliffs", image: "Temple photo library/red cliffs.jpg"},
  {id : 23, name: "Saratoga Springs", image: "Temple photo library/saratoga springs.jpg"},
  {id : 24, name: "St. George", image: "Temple photo library/st george.jpg"},
  {id : 25, name: "Vernal", image: "Temple photo library/vernal.jpg"},
  {id : 26, name: "Taylorsville", image: "Temple photo library/taylorsville.jpg"},
]

const shuffleTemples = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}   
const selectedTemples = shuffleTemples(Temples).slice(0, 8);


const Deck = [];

selectedTemples.forEach(temple => {
  Deck.push({id: temple.id, name: temple.name});
  Deck.push({id: temple.id, image: temple.image});
}
);


import React, { use, useState } from 'react';
import './gameStyle.css';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Stopwatch from './stopwatch';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Game() {
  const [isRunning, setIsRunning] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [cards, setCards] = React.useState(shuffleArray(Deck));
  const [lastThreeMessages, setLastThreeMessages] = useState([
    "Emma got a new best of 1:45!",
    "Noah got a new best of 2:10!",
    "John got a new best of 1:30!",
  ]);
  const firstSelectedRef = React.useRef(false);
  const secondSelectedRef = React.useRef(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);




  // Initialize stats from localStorage for the current user
  const [stats, setStats] = useState(() => {
    const allUserStats = JSON.parse(localStorage.getItem('userStats')) || {};
    return (user && user.username && allUserStats[user.username])
      ? allUserStats[user.username]
      : [
          { id: 1, correct: 0, total: 0 },
          { id: 2, correct: 0, total: 0 },
          { id: 3, correct: 0, total: 0 },
          { id: 4, correct: 0, total: 0 },
          { id: 5, correct: 0, total: 0 },
          { id: 6, correct: 0, total: 0 },
          { id: 7, correct: 0, total: 0 },
          { id: 8, correct: 0, total: 0 },
          { id: 9, correct: 0, total: 0 },
          { id: 10, correct: 0, total: 0 },
          { id: 11, correct: 0, total: 0 },
          { id: 12, correct: 0, total: 0 },
          { id: 13, correct: 0, total: 0 },
          { id: 14, correct: 0, total: 0 },
          { id: 15, correct: 0, total: 0 },
          { id: 16, correct: 0, total: 0 },
          { id: 17, correct: 0, total: 0 },
          { id: 18, correct: 0, total: 0 },
          { id: 19, correct: 0, total: 0 },
          { id: 20, correct: 0, total: 0 },
          { id: 21, correct: 0, total: 0 },
          { id: 22, correct: 0, total: 0 },
          { id: 23, correct: 0, total: 0 },
          { id: 24, correct: 0, total: 0 },
          { id: 25, correct: 0, total: 0 },
          { id: 26, correct: 0, total: 0 },
        ];
  });

  useEffect(() => {
    if (cards.every(card => card.isMatched) && isRunning) {
      setIsRunning(false);
      saveGlobalBest(user.username, elapsed);
      saveUsersBests(user.username, elapsed);

      navigate('/replay', { state: { elapsed } });
    }
  }, [cards, user.username, elapsed, isRunning]);


  function handleCardClick(card, index) {
    console.log("Card clicked:", card.id);

    if (firstSelectedRef.current === false) {
      firstSelectedRef.current = { card, index };
      setSelectedIndexes([index]);
      const newStats = stats.map((s, idx) => idx === (card.id - 1) ? { ...s, total: s.total + 1 } : s);
      setStats(newStats);
      return;
    } else if (secondSelectedRef.current === false) {
      if (index === firstSelectedRef.current.index) {
        console.log("Card already selected. Please choose a different card.");
        return;
      }
      secondSelectedRef.current = { card, index };
      setSelectedIndexes([firstSelectedRef.current.index, index]);
      const newStats2 = stats.map((s, idx) => idx === (card.id - 1) ? { ...s, total: s.total + 1 } : s);
      setStats(newStats2);

      if (firstSelectedRef.current.card.id === secondSelectedRef.current.card.id) {
        console.log("Match found!");
        const idA = firstSelectedRef.current.card.id;
        const idB = secondSelectedRef.current.card.id;

        setCards(prev => prev.map(c =>
          (c.id === idA || c.id === idB) ? { ...c, isMatched: true } : c
        ));
        const newStats3 = newStats2.map((s, idx) =>
          (idx === (idA - 1) || idx === (idB - 1)) ? { ...s, correct: s.correct + 1 } : s
        );
        setStats(newStats3);

        firstSelectedRef.current = false;
        secondSelectedRef.current = false;
        setSelectedIndexes([]);
        saveUserStats(user.username, newStats3);
      } else {
        setElapsed(prev => prev + 5000);
        console.log("No match. Try again.");
        firstSelectedRef.current = false;
        secondSelectedRef.current = false;
        setSelectedIndexes([]);
      }

      return;
    } else {
      firstSelectedRef.current = { card, index };
      secondSelectedRef.current = false;
      setSelectedIndexes([index]);
      return;
    }
  }
  function updateMessages(newMessage) {
    setLastThreeMessages(prev => {
      const next = [...prev, newMessage];
      return next.length > 3 ? next.slice(next.length - 3) : next;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateMessages(randomUpdateMessages());
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className="container-fluid  text-center gameMain">
              <div className ="websocketInfo">
               <Stopwatch isRunning={isRunning} setIsRunning={setIsRunning} elapsed={elapsed} setElapsed={setElapsed} />
<p>{lastThreeMessages[0]}</p>
<p>{lastThreeMessages[1]}</p>
<p>{lastThreeMessages[2]}</p>

</div>
        <div className="gameBoard">
          {cards.map((card, index) => (
  <div
    key={card.id + "-" + index}
    className={`card ${card.isMatched ? "hidden" : ""} ${selectedIndexes.includes(index) ? "selected" : ""}`}
    onClick={() => handleCardClick(card, index)}
  >
    {card.image ? (
      <img src={card.image} alt="Temple" width="100%" height="100%" />
    ) : (
      <p>{card.name}</p>
    )}
  </div>
))}

        </div>
         <div className ="mobileHolder">

      <div className ="websocketInfoMobile">
        <Stopwatch isRunning={isRunning} setIsRunning={setIsRunning} elapsed={elapsed} setElapsed={setElapsed} />

<p>{lastThreeMessages[0]}</p>
<p>{lastThreeMessages[1]}</p>
<p>{lastThreeMessages[2]}</p>


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

function shuffleArray(array) {
  // Create a shallow copy of the array to avoid mutating the original
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element using destructuring assignment.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]
    ];
  }

  return shuffledArray;
}


// Save stats for the current user in localStorage, supporting multiple users
function saveUserStats(username, stats) {
  // Get all user stats from localStorage or initialize an empty object
  const allUserStats = JSON.parse(localStorage.getItem('userStats')) || {};
  // Update the stats for the current user
  allUserStats[username] = stats;
  // Save back to localStorage
  localStorage.setItem('userStats', JSON.stringify(allUserStats));
}


function saveGlobalBest(username, time) {
  const globalBests = JSON.parse(localStorage.getItem('globalBests')) || [];
  const newResult = {
    username,
    time,
    date: new Date().toLocaleDateString()
  };
  globalBests.push(newResult);
  globalBests.sort((a, b) => a.time - b.time);
  globalBests.splice(5); // Keep only top 5
  localStorage.setItem('globalBests', JSON.stringify(globalBests));
}

function saveUsersBests(username, time) {
  // Load the object from localStorage or start with an empty object
  const usersBests = JSON.parse(localStorage.getItem('usersBests')) || {};

  // Get this user's array or start with an empty array
  const userTimes = usersBests[username] || [];

  // Add the new result
  userTimes.push({
    time,
    date: new Date().toLocaleDateString()
  });

  // Sort and keep only the top 5 (lowest times)
  userTimes.sort((a, b) => a.time - b.time);
  userTimes.splice(5);

  // Save back to the object
  usersBests[username] = userTimes;

  // Save the whole object to localStorage
  localStorage.setItem('usersBests', JSON.stringify(usersBests));
}


function randomUpdateMessages() {
  const randomIndex = Math.floor(Math.random() * hardcodedmessages.length);
  return hardcodedmessages[randomIndex];
}

const hardcodedmessages = [
  "Emma got a new best of 1:45!",
  "Noah got a new best of 2:10!",
  "John got a new best of 1:30!",
  "Sophia got a new best of 1:50!",
  "Liam got a new best of 2:00!",
  "Olivia got a new best of 1:40!",
  "Ava got a new best of 1:55!",
  "Isabella got a new best of 1:35!",
  "Mia got a new best of 2:05!",
  "Ethan got a new best of 1:25!",
  
]
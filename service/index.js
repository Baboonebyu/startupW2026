const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const authCookieName = 'token';
const db = require('./database.js');


let userScores = [
  {
    username: '123',
    scores: [
      { time: 60000, date: '2026-03-07' },
      { time: 62000, date: '2026-03-08' }
    ]
  }
];
let userStats = [
{username: '123', stats:    [
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
        ]}


];

const port = process.argv.length > 2 ? process.argv[2] : 4000;



// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Create user registration endpoint
apiRouter.post('/register', async (req, res) => {
    const value1 = req.body.username;
    const value2 = req.body.password;
    console.log(`Received registration request with username: ${value1} and password: ${value2}`);

   //taken username
    if (await findUserByName(req.body.username)) {
        return res.status(409).json({ error: 'Username already taken' });
    }
    //register new user
  else {
    const user = await createUser(req.body.username, req.body.password);
    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }

});

//login endpoint
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUserByName(req.body.username);
    if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      token = uuid.v4();
      setAuthCookie(res, token);
      await db.updateUserToken(user.username, token);
      console.log('Backend user:', user);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// Logout endpoint
apiRouter.delete('/auth/logout', async (req, res) => {

  const user = await findUserByToken(req.cookies[authCookieName]);
  if (user) {
    await db.updateUserRemoveToken(user.username);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const verifyToken = async (req, res, next) => {
  const user = await findUserByToken(req.cookies[authCookieName]);

  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  req.user = user;
  next();
};

//get global scores
apiRouter.get('/globalScores', async (req, res) => {
  const globalScores = await db.getGlobalScores();
  res.send(globalScores);
});

//save global scores
apiRouter.post('/globalScores', verifyToken, async (req, res) => {
  const globalScores = await db.getGlobalScores();
  globalScores.push(req.body);
  globalScores.sort((a, b) => a.time - b.time);
  if (globalScores.length > 5) {
    globalScores.pop();
  }
  await db.saveGlobalScores(globalScores);
});

//get user scores
apiRouter.get('/userScores', verifyToken, async (req, res) => {
  console.log('User in /userScores endpoint:', req.user);
  const userScoresEntry = await db.getUserScores(req.user.username);
  res.send(userScoresEntry ? userScoresEntry.scores : []);
});

//save user scores
apiRouter.post('/userScores', verifyToken, async (req, res) => {
  const userScoresEntry = await db.getUserScores(req.user.username);
  if (userScoresEntry) {
    userScoresEntry.scores.push(req.body);
    userScoresEntry.scores.sort((a, b) => a.time - b.time);
    if (userScoresEntry.scores.length > 5) {
      userScoresEntry.scores.pop();
    }
  } else {
    await db.saveUserScores(req.user.username, [req.body]);
  }
});



//get user stats
apiRouter.get('/userStats', verifyToken, (req, res) => {
  console.log('User in /userStats endpoint:', req.user);
  const userStatsEntry = userStats.find(u => u.username === req.user.username);
  res.send(userStatsEntry ? userStatsEntry.stats : [
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
        ]);
});


//save user stats
apiRouter.post('/userStats', verifyToken, (req, res) => {
  const userStatsEntry = userStats.find(u => u.username === req.user.username);
  if (userStatsEntry) {
    userStatsEntry.stats = req.body.stats;
  } else {
    userStats.push({ username: req.user.username, stats: req.body.stats });
  }
  res.status(200).send({ msg: 'Stats updated' });
});

async function findUserByName(username){
    return db.getUser(username);
}


async function findUserByToken(token){
    return db.getUserByToken(token);
}

async function createUser(username, password){
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    await db.addUser(user);
    return user;
}
// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
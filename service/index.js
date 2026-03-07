const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const authCookieName = 'token';

let users = [];

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
    if (await findUser('username', req.body.username)){
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
    const user = await findUser('username', req.body.username);
    if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      console.log('Backend user:', user);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});




async function findUser(lookup,value){
    if (!value) return null;
    return users.find(user => user[lookup] === value);
}


async function createUser(username, password){
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { token: uuid.v4(), username, password: hashedPassword };
    users.push(user);
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
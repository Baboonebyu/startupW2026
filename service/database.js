const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

const usersCollection = db.collection('users');
const globalScoresCollection = db.collection('globalScores');
const userScoresCollection = db.collection('userScores');
const userStatsCollection = db.collection('userStats');


(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();


function getUser(username) {
  return usersCollection.findOne({ username });
}

function getUserByToken(token) {
  return usersCollection.findOne({ token });
}   

function addUser(user) {
  return usersCollection.insertOne(user);
}


function updateUserToken(username, token) {
  return usersCollection.updateOne({ username }, { $set: { token } });
}

function updateUserRemoveToken(username) {
  return usersCollection.updateOne({ username }, { $unset: { token: "" } });
}

async function getGlobalScores() {
  // Returns only the globalScores array, or an empty array if not found
  const doc = await globalScoresCollection.findOne({});
  return doc && doc.globalScores ? doc.globalScores : [];
}

  function saveGlobalScores(scoresArray) {
    // Updates the single document to have globalScores: scoresArray
    return globalScoresCollection.updateOne({}, { $set: { globalScores: scoresArray } }, { upsert: true });
  }

  function getUserScores(username) {
    return userScoresCollection.findOne({ username });
  }

  function saveUserScores(username, scores) {
    return userScoresCollection.updateOne({ username }, { $set: { scores } }, { upsert: true });
  }





module.exports = {
  getUser,
  getUserByToken,
  addUser,
    updateUserToken,
    updateUserRemoveToken,
    getGlobalScores,
    saveGlobalScores,
    getUserScores,
    saveUserScores
};
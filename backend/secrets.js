// secrets.js
const secrets = {
  dbUri: process.env.DB_URI
};
const getSecret = (key) => secrets[key]
module.exports = getSecret;

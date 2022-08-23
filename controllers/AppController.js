// Path: controllers/AppController.js

const  Redis  = require("../utils/redis");
const DB = require("../utils/db");


class AppController {
  // GET /status should return if Redis is alive and if the DB is alive too by using the 2 utils created previously: { "redis": true, "db": true } with a status code 200
  static getStatus(req, res) {
    if (Redis.isAlive() && DB.isAlive()) {
      res.status(200).json({ "redis": true, "db": true });
    }
    return res.status(400).send("Redis or DB is not alive");
  }
  // GET /stats should return the number of users and the number of articles in the DB by using the 2 utils created previously: { "users": 1, "articles": 1 } with a status code 200
  static getStats(req, res) {
    (async () => {
      const users = await DB.nbUsers();
      const files = await DB.nbFiles();
      res.status(200).json({ users, files });
    })()
  }
}

module.exports = AppController;

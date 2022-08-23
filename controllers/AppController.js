// App Controller

import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

class AppController {
  static getStatus(response) {
    const data = {
      redis: RedisClient.isAlive(),
      db: DBClient.isAlive(),
    };
    return response.status(200).send(status);
  }

  static async getStats(response) {
    const stats = {
      users: await dbClient.users(),
      files: await dbClient.files(),
    };
    return response.status(200).send(stats);
  }
}

module.exports = AppController;

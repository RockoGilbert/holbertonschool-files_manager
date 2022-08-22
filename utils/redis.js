const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => console.log(`Error: ${err}`));
  }

  isAlive() {
    if (this.client.connected) {
      return true;
    } return false;
  }

  async get(key) {
    const value = await promisify(this.client.get).bind(this.client);
    const result = await value(key);
    return result;
  }

  async set(key, value, duration) {
    const result = await promisify(this.client.set).bind(this.client);
    await result(key, value, 'EX', duration);
  }

  async del(client, key) {
    const result = await promisify(this.client.del).bind(this.client);
    return result(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;

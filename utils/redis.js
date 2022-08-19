const redis = require('redis'); 
const { promisify } = require('util');

//RedisClient Class to performing operations  
class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => console.log(error);
  );

// isAlive() 
  isAlive() {
    this.client.connected; 

  async get(key) {
    // const getValue = await this.getAsync(key);
    // return value;
    const getValue = await promisify(this.client.get).bind(this.client);
    const newKey = await getValue(key);
    return newKey;
  }

  async set(key, value, duration) {
    this.client.set(key, value);
    this.client.expire(key, duration);
  }

  async del(key) {
    this.client.delete(key, value);
  }
}

const redisClient = new RedisClient();

export default redisClient;
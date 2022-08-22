<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> e1c22850f7e10a18eda8533af7fc0c50b05bd017
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
<<<<<<< HEAD
=======
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
>>>>>>> Still working on redis.js
=======
>>>>>>> 2bb872f518a917b3ff8f25758c2f1eab6dfab85d
>>>>>>> e1c22850f7e10a18eda8533af7fc0c50b05bd017
  }
}

const redisClient = new RedisClient();
<<<<<<< HEAD
<<<<<<< HEAD
export default redisClient;
=======

export default redisClient;
>>>>>>> Still working on redis.js
=======

export default redisClient;
=======
export default redisClient;
>>>>>>> 2bb872f518a917b3ff8f25758c2f1eab6dfab85d
>>>>>>> e1c22850f7e10a18eda8533af7fc0c50b05bd017

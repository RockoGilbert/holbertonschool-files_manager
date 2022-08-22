// DBClient should have:

// the constructor that creates a client to MongoDB:
// host: from the environment variable DB_HOST or default: localhost
// port: from the environment variable DB_PORT or default: 27017
// database: from the environment variable DB_DATABASE or default: files_manager
// a function isAlive that returns true when the connection to MongoDB is a success otherwise, false
// an asynchronous function nbUsers that returns the number of documents in the collection users

// After the class definition, create and export an instance of DBClient called dbClient
const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, { useNewUrlParser: true });
    this.client.on('error', (err) => console.log(`Error: ${err}`));

  }

  isAlive() {
    if (this.client.connected) {
      return true;
    }
    return false;
  }
  // an asynchronous function nbFiles that returns the number of documents in the collection files
  nbFiles() {
    return new Promise((resolve, reject) => {
      this.client.db(this.database).collection('files').countDocuments((err, count) => {
        if (err) {
          reject(err);
        } else {
          resolve(count);
        }
      });
    });
  }
  // an asynchronous function nbUsers that returns the number of documents in the collection users
  nbUsers() {
    return new Promise((resolve, reject) => {
      this.client.db(this.database).collection('users').countDocuments((err, count) => {
        if (err) {
          reject(err);
        } else {
          resolve(count);
        }
      });
    });
  }


}
const dbClient = new DBClient();
module.exports = dbClient;

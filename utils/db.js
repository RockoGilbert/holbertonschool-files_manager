<<<<<<< HEAD
import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, { useUnifiedTopology: true });
    this.client.connect();
    this.db = this.client.db(this.database);
  }

  isAlive() {
    if (this.client) {
      return true;
    }
    return false;
  }

  async nbUsers() {
    this.db = this.client.db(this.database);
    const collection = await this.db.collection('users');
    return collection.countDocuments();
  }

  async nbFiles() {
    this.db = this.client.db(this.database);
    const collection = await this.db.collection('files');
    return collection.countDocuments();
  }
}

=======
// DBClient should have:

// the constructor that creates a client to MongoDB:
// host: from the environment variable DB_HOST or default: localhost
// port: from the environment variable DB_PORT or default: 27017
// database: from the environment variable DB_DATABASE or default: files_manager
// a function isAlive that returns true when the connection to MongoDB is a success otherwise, false
// an asynchronous function nbUsers that returns the number of documents in the collection users
// an asynchronous function nbFiles that returns the number of documents in the collection files
// After the class definition, create and export an instance of DBClient called dbClient
const { MongoClient } = require('mongodb');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';

const url = `mongodb://${host}:${port}/${database}`;
class DBClient {
  constructor() {

  MongoClient.connect(url, { useUnifiedTopology: true }),(err, client) => {
      if (client) {
        this.db = client.db(database);
      }
      if (err) {
        console.log(err);
        this.db = null;
      }
    }
  }

  isAlive() {
    return this.client = true;
  }
  nbUsers() {
    try {
      return this.client.db(this.database).collection('users').countDocuments();
    }
    catch (err) {
      console.log(`Error: ${err}`);
      return false;
    }
  }
  nbFiles() {
    try {
    return this.client.db(this.database).collection('files').countDocuments();
    }
    catch (err) {
      console.log(`Error: ${err}`);
      return false;
    }
  }

}
>>>>>>> 2bb872f518a917b3ff8f25758c2f1eab6dfab85d
const dbClient = new DBClient();
module.exports = dbClient;

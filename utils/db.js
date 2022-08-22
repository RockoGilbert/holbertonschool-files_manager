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
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
      if (client) {
        this.db = client.db(database);
        this.users = this.db.collection('users');
        this.files = this.db.collection('files');
      }
      if (err) {
        console.log(err);
        this.db = false;
      }
    });
  }

  isAlive() {
    if (!this.db) {
      return !!this.db;
    }
    return !!this.db;
  }

  async nbUsers() {
    const numOfUsers = await this.users.countDocuments({});
    return numOfUsers;
  }

  async nbFiles() {
    const numOfFiles = await this.files.countDocuments({});
    return numOfFiles;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;

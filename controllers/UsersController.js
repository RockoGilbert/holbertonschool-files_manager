// POST /users should create a new user in DB:

// To create a user, you must specify an email and a password
// If the email is missing, return an error Missing email with a status code 400
// If the password is missing, return an error Missing password with a status code 400
// If the email already exists in DB, return an error Already exist with a status code 400
// The password must be stored after being hashed in SHA1
// The endpoint is returning the new user with only the email and the id (auto generated by MongoDB) with a status code 201
// The new user must be saved in the collection users:
// email: same as the value received
// password: SHA1 value of the value received

const sha1 = require('sha1');
const dbClient = require('../utils/db');
const ObjectId = require('mongodb').ObjectId;
const Redis = require('../utils/redis');

const users = dbClient.db.collection('users');

class UsersController {
    static postNew(req, res) {
      (async () => {
        const { email, password } = req.body;
        if (!email) {
          return res.status(400).send({ error: 'Missing email' });

        } else if (!password) {
          return res.status(400).send({ error: 'Missing password' });
        }
        const user = await users.findOne({ email });
        if (user) {
          return res.status(400).send({ error: 'Already exist' });
        }
        const hashedPassword = sha1(password);
        const newUser = await users.insertOne({ email, password: hashedPassword });
        return res.status(201).send(newUser.ops[0]);
      })();
    }


}

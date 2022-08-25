import { ObjectId } from 'mongodb';

const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');

class UsersController {
  static async postNew(req, res) {
    const { email } = req.body;
    const { password } = req.body;
    const search = await dbClient.db.collection('users').find({ email }).toArray();
    if (!email) {
      return (res.status(400).json({ error: 'Missing email' }));
    } if (!password) {
      return (res.status(400).json({ error: 'Missing password' }));
    } if (search.length > 0) {
      return (res.status(400).json({ error: 'Already exist' }));
    }
    const hashpwd = hashPasswd(password);
    const addUser = await dbClient.db.collection('users').insertOne({ email, password: hashpwd });
    const newUser = { id: addUser.ops[0]._id, email: addUser.ops[0].email };
    return (res.status(201).json(newUser));
  }
}

module.exports = UsersController;
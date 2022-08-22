// that contains all endpoints of our API

const express = require('express');

const AppController = require('../controllers/AppController');

const router = express.Router(); // set up a new router

router.get('/status', AppController.getStatus); // get status of the app
router.get('/stats', AppController.getStats); // get stats of the app

module.exports = router; // export router to be used in server.js

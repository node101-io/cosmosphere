const express = require('express');

const router = express.Router();

const indexPostController = require('../controllers/subscribe/post');

router.post(
  '/',
    indexPostController
);

module.exports = router;

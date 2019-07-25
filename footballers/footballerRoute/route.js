const router = require('express').Router();
const handlers = require('./handler');

router.post('/footballers', handlers.createFootballer);

module.exports = router;

const router = require('express').Router();
const handlers = require('./handler');

router.post('/footballers', handlers.createFootballer);
router.delete('/footballers/:id', handlers.deleteFootballer);

module.exports = router;

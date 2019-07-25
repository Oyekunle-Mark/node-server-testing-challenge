const db = require('../../database/dbConfig');

const get = () => db('footballers');

const insert = ftl => db('footballers').insert(ftl);

module.exports = {
  get,
  insert,
};

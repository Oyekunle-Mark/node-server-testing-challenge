const db = require('../../database/dbConfig');

const get = id => {
  const query = db('footballers');

  return id ? query.where({ id }).first() : query;
};

const insert = async ftl => {
  const [id] = await db('footballers').insert(ftl);

  return get(id);
};

module.exports = {
  get,
  insert,
};

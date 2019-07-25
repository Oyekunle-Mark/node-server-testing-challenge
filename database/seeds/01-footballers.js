exports.seed = knex =>
  knex('footballers')
    .truncate()
    .then(() =>
      knex('footballers').insert([
        { name: 'Lionel Messi', position: 'forward' },
        { name: 'Xavi Hernandez', position: 'midfielder' },
        { name: 'Paolo Maldini', position: 'Defender' },
        { name: 'Edwin Van der Sar', position: 'Goal Keeper' },
        { name: 'Sunday Oliseh', position: 'Midfielder' },
      ]),
    );

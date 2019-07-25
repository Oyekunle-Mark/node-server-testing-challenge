const db = require('../../database/dbConfig');
const Model = require('./index');

beforeEach(async () => {
  await db('footballers').truncate();
});

describe('gets all the footballers', () => {
  it('returns an array', async () => {
    await Model.insert({ name: 'Andrea Pirlo', position: 'Midfielder' });

    const footballers = await Model.get();

    expect(footballers).toBeTruthy();
    expect(footballers).toHaveLength(1);
  });

  it('returns all the footballers in the table', async () => {
    await Model.insert({ name: 'Andrea Pirlo', position: 'Midfielder' });
    await Model.insert({ name: 'Andrea Pirlo', position: 'Midfielder' });

    const footballers = await Model.get();

    expect(footballers).toHaveLength(2);
  });
});

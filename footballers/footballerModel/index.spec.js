const db = require('../../database/dbConfig');
const Model = require('./index');

beforeEach(async () => {
  await db('footballers').truncate();
});

describe('creates a footballers', () => {
  it('successfully create footballer', async () => {
    await Model.insert({ name: 'Andrea Pirlo', position: 'Midfielder' });

    const footballers = await Model.get();

    expect(footballers).toBeTruthy();
    expect(footballers).toHaveLength(1);
  });

  it('returns the new created footballer', async () => {
    const footballers = await Model.insert({
      name: 'Andrea Pirlo',
      position: 'Midfielder',
    });

    expect(footballers).toEqual({
      id: 1,
      name: 'Andrea Pirlo',
      position: 'Midfielder',
    });
  });
});

describe('deletes a footballer', () => {
  it('Removes a footballer', async () => {
    await Model.insert({ name: 'Andrea Pirlo', position: 'Midfielder' });

    const id = await Model.remove(1);

    expect(id).toBe(1);
  });
});

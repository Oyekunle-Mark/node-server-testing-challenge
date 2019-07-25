const request = require('supertest');
const server = require('../../api/server');

describe('POST /footballers', () => {
  it('Returns a 201', () =>
    request(server)
      .post('/api/footballers')
      .send({
        name: 'Andrea Pirlo',
        position: 'Midfielder',
      })
      .expect('Content-Type', /json/)
      .expect(201));

  it('Successfully creates a user', () =>
    request(server)
      .post('/api/footballers')
      .send({
        name: 'Andrea Pirlo',
        position: 'Midfielder',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.body.data.name).toEqual('Andrea Pirlo');
        expect(res.body.data.position).toEqual('Midfielder');
      }));
});

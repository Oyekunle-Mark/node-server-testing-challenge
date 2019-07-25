const request = require('supertest');
const server = require('./server');

describe('/ Returns a message that server is up', () => {
  it('returns a status 200', () =>
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200));

  it('prints the server welcome message', () =>
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.message).toEqual('Welcome, Thou faithful developer.');
      }));
});

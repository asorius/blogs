const request = require('supertest');
const mongoose = require('mongoose');
const should = require('chai').should();
const app = require('../app');
const User = require('../modules/user');

const testUsers = [
  { name: 'jon', username: 'dd', password: '13' },
  { name: 'don', username: 'ff', password: '213as' },
  { name: 'son', username: 'tt', password: '12312' }
];
const reset = async () => {
  await User.deleteMany({});
  for (let i = 0; i < testUsers.length; i++) {
    let user = new User(testUsers[i]);
    await user.save();
  }
};
describe('users endpoint tests', function() {
  before(async function() {
    await reset();
  });
  it('should return arrau of users and check length', function(done) {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.be.an('array');
        res.body.length.should.be.equal(testUsers.length);
        done();
      });
  });

  it('should create new user and return name and username', function(done) {
    request(app)
      .post('/api/users')
      .send({ name: 'asdfasd', username: 'asds', password: 'pass' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.include({ name: 'asdfasd', username: 'asds' });
        done();
      });
  });
  it('should return error', function(done) {
    request(app)
      .post('/api/users')
      .send({ name: 'name', username: 'd', password: 'asdfsadf' })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.deep.equal({
          error: 'user and name must be at least 3 characters long'
        });
        done();
      });
  });

  after(function() {
    mongoose.connection.close();
  });
});

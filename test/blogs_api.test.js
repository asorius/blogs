const request = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai').should();
const app = require('../app');

// describe(' chai GET ALL /', () => {
//   it('should return all in json', async done => {
//     await request(app)
//       .get('/api/blogs')
//       .expect(200)
//       .end(done);
//   });
// });

// describe('Array', function() {
//   describe('#indexOf()', () => {
//     it('should return -1 when the value is not present', () => {
//       expect([1, 2, 3].indexOf(4)).to.equal(-1);
//     });
//   });
// });

// // describe('GET SINGLE /ID', () => {
// //   it('should return blog in json', () => {
// //     chai
// //       .request(app)
// //       .get('/api/blogs/5e4e84795bdde81be8d9574a')
// //       .expect(200)
// //       .expect('Content-Type', /json/)
// //       .expect({
// //         title: 'String',
// //         author: 'String',
// //         url: 'String',
// //         likes: 56676756,
// //         id: '5e4e84795bdde81be8d9574a'
// //       });
// //   });
// // });

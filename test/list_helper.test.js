// const testingObject = require('../utils/list_helper');
// const assert = require('assert');
// // test('Dummy should return one', () => {
// //   const blogs = [];
// //   const result = testingObject.dummy(blogs);
// //   expect(result).toBe(1);
// // });
// // describe('Total likes', () => {
// //   const listWithOneBlog = [
// //     {
// //       _id: '5a422aa71b54a676234d17f8',
// //       title: 'Go To Statement Considered Harmful',
// //       author: 'Edsger W. Dijkstra',
// //       url:
// //         'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
// //       likes: 5,
// //       __v: 0
// //     }
// //   ];
// //   test('when list has only one blog equals the like of that', () => {
// //     const result = testingObject.totalLikes(listWithOneBlog);
// //     expect(result).toBe(5);
// //   });
// // });
// describe('Favorite blog', () => {
//   const blogsList = [
//     {
//       title: 'Go To Statement Considered Harmful',
//       author: 'Edsger W. Dijkstra',
//       likes: 5
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Edsger W. Dijkstra',
//       likes: 12
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Edsger W. Dijkstra',
//       likes: 10
//     }
//   ];
//   it('should return object with 12 likes', () => {
//     const result = testingObject.favoriteBlog(blogsList);
//     const expected = {
//       title: 'Canonical string reduction',
//       author: 'Edsger W. Dijkstra',
//       likes: 12
//     };
//     assert.deepStrictEqual(result, expected);
//   });
// });
// describe('Most blogs published', () => {
//   const blogsList = [
//     {
//       title: 'Go To Statement Considered Harmful',
//       author: 'Edsger W. Dijkstra',
//       likes: 5
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Edsger W. Dijkstra',
//       likes: 12
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'ff',
//       likes: 10
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Robert C. Martin',
//       likes: 10
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'ww',
//       likes: 7
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Robert C. Martin',
//       likes: 20
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Robert C. Martin',
//       likes: 5
//     }
//   ];
//   it('should return Robert C. Martin', () => {
//     const result = testingObject.mostBlogs(blogsList);
//     assert.deepStrictEqual(result, {
//       author: 'Robert C. Martin',
//       blogs: 3
//     });
//   });
// });
// describe('Most liked blog', () => {
//   const blogsList = [
//     {
//       title: 'Go To Statement Considered Harmful',
//       author: 'Edsger W. Dijkstra',
//       likes: 5
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Edsger W. Dijkstra',
//       likes: 12
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'ff',
//       likes: 10
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Robert C. Martin',
//       likes: 10
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'ww',
//       likes: 7
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Robert C. Martin',
//       likes: 20
//     },
//     {
//       title: 'Canonical string reduction',
//       author: 'Robert C. Martin',
//       likes: 5
//     }
//   ];
//   it('should return Robert C. Martin', () => {
//     const result = testingObject.mostLikes(blogsList);
//     assert.deepStrictEqual(result, {
//       author: 'Robert C. Martin',
//       likes: 20
//     });
//   });
// });

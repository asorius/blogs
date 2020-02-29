const dummy = blogs => 1;
const totalLikes = blogs => {
  let likes = 0;
  for (const blog of blogs) {
    likes += blog.likes;
  }
  return likes;
};
const favoriteBlog = blogs => {
  return blogs.reduce((prev, current) =>
    prev.likes > current.likes ? prev : current
  );
};
const mostBlogs = blogs => {
  let data = blogs.reduce((acc, el) => {
    if (acc[el.author]) {
      acc[el.author] += 1;
      return acc;
    } else {
      return { ...acc, [el.author]: 1 };
    }
  }, {});
  let result = [...Object.entries(data)].reduce(
    (acc, el) => {
      if (el[1] > acc.blogs) {
        acc.author = el[0];
        acc.blogs = el[1];
        return acc;
      } else {
        return acc;
      }
    },
    { author: '', blogs: 0 }
  );

  return result;
};
const mostLikes = blogs => {
  return blogs.reduce(
    (acc, el) => {
      if (el.likes > acc.likes) {
        acc.author = el.author;
        acc.likes = el.likes;
        return acc;
      } else {
        return acc;
      }
    },
    { likes: 0 }
  );
};
module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };

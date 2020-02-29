const blogsRouter = require('express').Router();
const Blog = require('../modules/blog');
const User = require('../modules/user');
blogsRouter.get('/', async (request, response) => {
  try {
    console.log('atempt');
    const updatedBlogs = await Blog.find({}).populate('creator', {
      username: 1,
      name: 1,
      id: 1
    });
    response.status(200).json(updatedBlogs);
  } catch (error) {
    response.json(error);
  }
});

blogsRouter.post('/', async (request, response, next) => {
  const blog = new Blog(request.body);
  const userId = request.body.creator;
  try {
    const addedBlog = await blog.save();
    const update = await User.findByIdAndUpdate(
      userId,
      {
        $push: { blogs: addedBlog.id }
      },
      { new: true }
    );
    const populated = await Blog.findById(addedBlog.id).populate('creator', {
      username: 1,
      name: 1,
      id: 1
    });
    response.status(200).json(populated);
  } catch (error) {
    next(error);
  }
});
blogsRouter.get('/:id', async (request, response, next) => {
  try {
    const foundBlod = await Blog.findById(request.params.id);
    response.status(200).json(foundBlod);
  } catch (error) {
    next(error);
  }
});
blogsRouter.post('/:id', async (request, response, next) => {
  const id = request.params.id;
  const likes = request.body.likes;
  try {
    const replaced = await Blog.findByIdAndUpdate(id, { likes }, { new: true });
    response.status(200).json(replaced);
  } catch (error) {
    next(error);
  }
});
module.exports = blogsRouter;

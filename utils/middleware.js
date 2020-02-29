const undefinedRouteErrors = (req, res, next) => {
  res.status(404).send('Undefined route error message.');
};
const serversideErrors = (error, req, res, next) => {
  console.log(error);
  res.status(500).send('Error on server side');
};
const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7);
  }
  next();
};
module.exports = {
  undefinedRouteErrors,
  serversideErrors,
  tokenExtractor
};

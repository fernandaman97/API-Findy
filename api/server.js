const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);
server.use(router);

// Add custom routes if needed
// server.use(jsonServer.rewriter({
//   '/api/*': '/$1'
// }));

// Use the router
server.use(router);

// Export the server as a function
module.exports = (req, res) => {
  server(req, res);
};
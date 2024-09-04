const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Configure CORS
server.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Add custom routes if needed
server.use(router);

// Start the server
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
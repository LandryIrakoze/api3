const express = require('express');

const productsRouter = require('../products/products-router.js');

const server = express();

// global middleware
server.use(express.json());

server.use('/products', productsRouter);
// server.use('/suppliers', suppliersRouter);

// route handlers
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

// manage products (8)
// manage clients (8)
// manage orders
// manage suppliers

server.get('/clients', (req, res) => {});

// export default server;
module.exports = server;

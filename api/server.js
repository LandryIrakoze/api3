const express = require('express');

const productsRouter = require('../products/products-router.js');
const suppliersRouter = require('../suppliers/suppliers-router.js');

const server = express();

// global middleware
server.use(express.json());
// server.use(uppercaser); // using custom middleware globally

// we can use middleware locally
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

// route handlers
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

// export default server;
module.exports = server;

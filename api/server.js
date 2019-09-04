const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

// manage products (8)
// manage clients (8)
// manage orders
// manage suppliers

server.get('/products', (req, res) => {});

server.get('/clients', (req, res) => {});

server.get('/suppliers', (req, res) => {});

// export default server;
module.exports = server;

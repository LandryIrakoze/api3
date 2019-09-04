// implement a get to /suppliers respond with a message
// implement a GET to /suppliers/name that returns the name sent

const router = require('express').Router();

function uppercaser(req, res, next) {
  let name = req.params.name;
  console.log(req.params.name);

  if (name) {
    req.name = name.toUpperCase();
  }

  // this sends the request to the next middleware (or route handler)
  next();
}

router.get('/', (req, res) => {
  res.send('get to /suppliers');
});

router.get('/:name', uppercaser, (req, res) => {
  // express needs to know there is a url parameter to collect
  res.send(`get to /suppliers/${req.name}`);
});

module.exports = router;

// exports.router = express.Router() > const { router } = require();
// module.exports = { router };

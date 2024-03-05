const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: 'Você excedeu o limite de requisições. Tente novamente mais tarde.',
});

module.exports = limiter;
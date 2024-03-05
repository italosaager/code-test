const cors = require('cors');

function configureCors() {
  let allowedOrigins = process.env.DOMINIOS;

  if(process.env.DOMINIOS !== "*"){
    allowedOrigins = process.env.DOMINIOS.split(',');
  }

  const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  };

  return cors(corsOptions);
}

module.exports = configureCors;
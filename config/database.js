let mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  let db = mongoose.connection;

  db.on('connected', function(){
      console.log(`mongodb on ${db.host}:${db.port}`)
  })

  module.exports = mongoose;
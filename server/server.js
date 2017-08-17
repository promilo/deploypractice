const express = require('express');

const env = process.env.NODE_ENV || 'development';
const bundleSrc = env === 'production' ? '/bundle.js' : 'http://localhost:8081/build/bundle.js'

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.render('index', {
    bundleSrc
  });
})

const server = app.listen(process.env.PORT || 8080, () => {
  const address = server.address();
  console.log(`Listening on ${address.port}`);
})

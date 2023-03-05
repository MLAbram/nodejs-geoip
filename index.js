const express = require('express');
const app = express();
const geoip = require('geoip-lite');

app.use(express.json());

app.get('/', (req, res) => {
    const ip = "::ffff:207.97.227.239";
    const geo = geoip.lookup(ip);

    console.log(req.ip);
    console.log(geo);
    return res.status(200).send('A demo using geoip-lite in Node.js.');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000.');
});
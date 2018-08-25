const express = require('express');
const { PlaneModel } = require('./database/Model');

const app = express();

app.use(express.static('public/dist'));

app.get('/api/:tailNumber', (req, res) => {
  const { tailNumber } = req.params;
  PlaneModel.find({ tailNumber }, (err, data) => {
    if (err) res.end(err);
    res.send(data);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

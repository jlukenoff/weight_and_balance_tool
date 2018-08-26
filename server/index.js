const express = require('express');
const { PlaneModel } = require('./database/Model');

const app = express();

app.use(express.static('public/dist'));

app.get('/api/plane/:tailNumber', (req, res) => {
  const { tailNumber } = req.params;
  PlaneModel.find({ tailNumber }, (err, data) => {
    if (err) res.end(err);
    res.send(data);
  });
});

app.get('/api/all', (req, res) => {
  PlaneModel.find().exec((err, data) => {
    if (err) console.error(`Error fetching data: ${err}`);
    res.send(data.map(plane => ({
      make: plane.make,
      model: plane.model,
      tailNumber: plane.tailNumber,
      year: plane.year,
    })));
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

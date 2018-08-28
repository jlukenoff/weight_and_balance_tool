const mongoose = require('mongoose');

mongoose.connect('mongodb://mvp:ria123@ds235401.mlab.com:35401/heroku_0xnzjvdh', { useNewUrlParser: true });

module.exports = {
  mongoose,
};

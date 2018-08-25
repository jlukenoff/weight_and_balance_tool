const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/weightBalanceDB', { useNewUrlParser: true });

module.exports = {
  mongoose,
};

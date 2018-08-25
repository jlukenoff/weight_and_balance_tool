const { mongoose } = require('./index');

const aircraftSchema = new mongoose.Schema({
  id: Number,
  tailNumber: Number,
  make: String,
  model: String,
  year: Number,
  equipment: String,
  emptyWeight: Number,
  maxWeight: Number,
  maxFuel: Number,
  cargoWeight1: Number,
  cargoWeight2: Number,
  initial: Number,
  frontSeats: Number,
  rearSeats: Number,
  fuelPosition: Number,
  cargoPosition1: Number,
  cargoPosition2: Number,
});

const PlaneModel = mongoose.model('aircraft', aircraftSchema);

module.exports = {
  PlaneModel,
  mongoose,
};

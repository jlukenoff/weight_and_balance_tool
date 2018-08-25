const fs = require('fs');
const { mongoose, PlaneModel } = require('../server/database/Model');

fs.readFile(('./data/data.csv'), (err, result) => {
  if (err) console.error(`File read error: ${err}`);
  const data = result.toString();
  PlaneModel.insertMany(data.split('\n').slice(1).map((plane) => {
    const arr = plane.split(',');
    return {
      id: arr[0],
      tailNumber: arr[1],
      make: arr[2],
      model: arr[3],
      year: arr[4],
      equipment: arr[5],
      emptyWeight: arr[6],
      maxWeight: arr[7],
      maxFuel: arr[8],
      cargoWeight1: arr[9],
      cargoWeight2: arr[10],
      initial: arr[11],
      frontSeats: arr[12],
      rearSeats: arr[13],
      fuelPosition: arr[14],
      cargoPosition1: arr[15],
      cargoPosition2: arr[16],
    };
  }), (error) => {
    if (error) console.error(`Mongo insert error: ${error}`);
    mongoose.connection.close();
  });
});

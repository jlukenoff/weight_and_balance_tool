const fs = require('fs');
const faker = require('faker');

const random = max => Math.floor(Math.random() * max);
const randomFloat = max => (Math.random() * max).toFixed(2);

const generateData = (file, index) => {
  const make = ['Cessna', 'Cirrus', 'Piper', 'Mooney', 'Beachcraft', 'Citabria'][random(6)];
  const tailNumber = 2000 - random(1000);
  file.write(`${index},${tailNumber},${make},${faker.lorem.word()},${2018 - random(30)},${faker.lorem.word()},${3000 - random(1000)},${5000 - random(1000)},${500 - random(300)},${200 - random(100)},${150 - random(100)},${100 - randomFloat(75)},${100 - randomFloat(50)},${100 - randomFloat(75)},${200 - randomFloat(100)},${150 - randomFloat(100)},${150 - randomFloat(100)}\n`);
};

const dataFile = fs.createWriteStream('data/data.csv');
dataFile.write('id,tail_number,make,model,year,equipment,emptyWeight,maxWeight,maxFuel,cargoWeight1,cargoWeight2,initial,frontSeats,rearSeats,fuelPosition,cargoPosition1,cargoPosition2\n');

for (let index = 1; index <= 1000; index++) {
  generateData(dataFile, index);
}

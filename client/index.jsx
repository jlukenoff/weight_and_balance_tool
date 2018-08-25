import React, { Component } from 'react';
import Chart from './Components/Chart/Chart';
import WeightBalanceTable from './Components/WeightBalanceTable/WeightBalanceTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 100,
      tailNumber: 1541,
      make: 'Beachcraft',
      model: 'reprehenderit',
      year: 1996,
      equipment: 'fugit',
      emptyWeight: 2248,
      maxWeight: 4797,
      maxFuel: 452,
      cargoWeight1: 194,
      cargoWeight2: 133,
      initial: 72.51,
      frontSeats: 79.08,
      rearSeats: 41.78,
      fuelPosition: 108.39,
      cargoPosition1: 125.97,
      cargoPosition2: 112.53,
      currrentFrontSeatWeight: 0,
      currentBackSeatWeight: 0,
      currentFuelWeight: 0,
      currentCargo1Weight: 0,
      currentCargo2Weight: 0,
    };
    this.update = this.update.bind(this);
  }

  update(event, key) {
    event.preventDefault();
    const newState = { ...this.state };
    newState[key] = +event.target.value;
    this.setState({ ...newState });
  }

  render() {
    return (
      <div>
        <WeightBalanceTable
          {...this.state}
          update={this.update}
        />
        <Chart />
      </div>
    );
  }
}

window.App = App;

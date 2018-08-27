import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Components/Chart/Chart';
import WeightBalanceTable from './Components/WeightBalanceTable/WeightBalanceTable';
import PlaneSelect from './Components/PlaneSelect/PlaneSelect';

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
      allPlanesByMake: {},
      currentMake: '',
      currentModel: '',
      currentTailNumber: '',
    };
    this.update = this.update.bind(this);
    this.getAll = this.getAll.bind(this);
    this.handlePlaneSelect = this.handlePlaneSelect.bind(this);
    this.getPlaneByTailNumber = this.getPlaneByTailNumber.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    fetch('/api/all')
      .then(chunk => chunk.json())
      .then((res) => {
        const allPlanesByMake = res.reduce((makes, plane) => {
          if (makes[plane.make] === undefined) {
            makes[plane.make] = [plane];
          } else {
            makes[plane.make].push(plane);
          }
          return makes;
        }, {});
        this.setState({ allPlanesByMake });
      }).catch(err => console.error(`error parsing response ${err}`));
  }

  getPlaneByTailNumber(tailNumber) {
    fetch(`api/plane/${tailNumber}`)
      .then(chunk => chunk.json())
      .then((res) => {
        console.log(res);
        this.setState({ ...res });
      })
      .catch(err => console.error(`error parsing response ${err}`));
  }

  update(event, key) {
    event.preventDefault();
    const value = +event.target.value;
    const newState = { ...this.state };
    newState[key] = value;
    this.setState({ ...newState });
  }

  handlePlaneSelect(e, property) {
    e.preventDefault();
    const { value } = e.target;
    if (property === 'currentTailNumber') {
      this.getPlaneByTailNumber(value);
    } else {
      const newState = { ...this.state };
      newState[property] = value;
      this.setState({ ...newState });
    }
  }

  render() {
    return (
      <div>
        <PlaneSelect {...this.state} handleSelect={this.handlePlaneSelect} />
        <WeightBalanceTable
          {...this.state}
          update={this.update}
        />
        <Chart />
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('WeightAndBalance'),
);

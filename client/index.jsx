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
      tailNumber: 'N1004E',
      make: 'Cessna',
      model: '172SP',
      year: 1996,
      equipment: 'fugit',
      emptyWeight: 1748.5,
      maxWeight: 2550,
      maxCoG: 45.25,
      maxFuel: 53 * 6,
      cargoWeight1: 120,
      cargoWeight2: 50,
      initial: 41.86,
      frontSeats: 37,
      rearSeats: 73,
      fuelPosition: 48,
      cargoPosition1: 95.00,
      cargoPosition2: 123.00,
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
    const {
      currrentFrontSeatWeight,
      currentBackSeatWeight,
      currentFuelWeight,
      currentCargo1Weight,
      currentCargo2Weight,
      emptyWeight,
      initial,
      frontSeats,
      rearSeats,
      fuelPosition,
      cargoPosition1,
      cargoPosition2,
    } = this.state;
    const CoGData = {
      emptyMoment: Math.ceil(emptyWeight * initial),
      frontSeatsMoment: Math.ceil(currrentFrontSeatWeight * frontSeats),
      rearSeatsMoment: Math.ceil(currentBackSeatWeight * rearSeats),
      cargo1Moment: Math.ceil(currentCargo1Weight * cargoPosition1),
      cargo2Moment: Math.ceil(currentCargo2Weight * cargoPosition2),
      fuelMoment: Math.ceil(currentFuelWeight * fuelPosition),
    };
    return (
      <div>
        <PlaneSelect {...this.state} handleSelect={this.handlePlaneSelect} />
        <WeightBalanceTable
          {...this.state}
          {...CoGData}
          update={this.update}
        />
        <Chart
          {...this.state}
          {...CoGData}
        />
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('WeightAndBalance'),
);

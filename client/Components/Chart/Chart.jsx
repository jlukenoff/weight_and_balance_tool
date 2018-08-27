import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.css';

const Chart = (props) => {
  const {
    initial,
    frontSeats,
    rearSeats,
    fuelPosition,
    cargoPosition1,
    cargoPosition2,
    currrentFrontSeatWeight,
    currentBackSeatWeight,
    currentFuelWeight,
    currentCargo1Weight,
    currentCargo2Weight,
    maxWeight,
    maxCoG,
    emptyWeight,
    emptyMoment,
    frontSeatsMoment,
    rearSeatsMoment,
    cargo1Moment,
    cargo2Moment,
    exceedsBoundary,
    toggleMessage,
  } = props;

  const renderCoGByFuelWeight = fuelWeight => (
    ((fuelWeight * fuelPosition) + emptyMoment + frontSeatsMoment + rearSeatsMoment + cargo1Moment + cargo2Moment)
    / (fuelWeight + currentBackSeatWeight + currrentFrontSeatWeight + currentCargo1Weight + currentCargo2Weight + emptyWeight)
  );
  
  const renderCoGFlight = () => {
    // declare output array
    const output = [];
    let fuelWeight = currentFuelWeight;
    for (let i = 0; i <= 10; i++) {
      console.log(fuelWeight);
      output.push(renderCoGByFuelWeight(fuelWeight));
      fuelWeight -= (fuelWeight * 0.1);
    }
    return output;
  };
  const flightPlan = renderCoGFlight();

  if ((!exceedsBoundary && (flightPlan[flightPlan.length - 1] > maxCoG || flightPlan[0] > maxCoG))
    || (exceedsBoundary && (flightPlan[flightPlan.length - 1] < maxCoG || flightPlan[0] < maxCoG))
  ) {
    toggleMessage();
  }
  return (
    <div className={styles.Chart} id="CoG-Graph">
      <Line
        height={400}
        width={400}
        data={{
          labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
          datasets: [
            {
              label: 'Current CoG',
              data: flightPlan,
              fill: false,
              borderColor: 'rgb(35, 209, 35)',
              pointBackgroundColor: 'rgb(35, 209, 35)',
            },
            {
              label: 'Max CG',
              data: [maxCoG, maxCoG, maxCoG, maxCoG, maxCoG, maxCoG, maxCoG, maxCoG, maxCoG, maxCoG, maxCoG],
              fill: false,
              borderColor: 'rgb(247, 61, 95)',
              pointRadius: 0,
              pointHitRadius: 0,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: 'Center of Gravity',
            fontSize: 15,
          },
          legend: {
            display: true,
            position: 'bottom',
          },
          maintainAspectRatio: true,
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Fuel Consumption',
              },
            }],
            yAxes: [{
              display: true,
              ticks: {
                min: frontSeats - 2,
              },
              scaleLabel: {
                display: true,
                labelString: 'CG (inches)',
              },
            }],
          },
        }}
      />
    </div>
  );
};

export default Chart;

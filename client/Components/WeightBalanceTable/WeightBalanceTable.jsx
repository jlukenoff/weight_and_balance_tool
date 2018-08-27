import React from 'react';
import styles from './WeightBalanceTable.css';

/* id: 100,
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
cargoPosition2: 112.53999999999999, */

// weight * arm = moment;
// moment / weight = CoG;
// weight - emptyWeight = delta

const WeightBalanceTable = (props) => {
  const {
    emptyWeight,
    maxWeight,
    maxFuel,
    cargoWeight1,
    cargoWeight2,
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
    update,
    emptyMoment,
    frontSeatsMoment,
    rearSeatsMoment,
    fuelMoment,
    cargo1Moment,
    cargo2Moment,
  } = props;

  const totalWeight = currentBackSeatWeight + currentFuelWeight + currrentFrontSeatWeight + currentCargo1Weight + currentCargo2Weight + emptyWeight;
  const totalMoment = emptyMoment + frontSeatsMoment + rearSeatsMoment + fuelMoment + cargo1Moment + cargo2Moment;

  return (
    <div id="Weight-and-Balance-Table-Container" className={styles.container}>
      <div id="table-header" className={styles.row}>
        <div className={`item ${styles.cell}`}>Item</div>
        <div className={`weight ${styles.cell}`}>Weight (lbs)</div>
        <div className={`max ${styles.cell}`}>Max</div>
        <div className={`delta ${styles.cell}`}>&Delta;</div>
        <div className={`arm ${styles.cell}`}>Arm</div>
        <div className={`moment ${styles.cell}`}>Moment</div>
      </div>
      <div id="empty-weight" className={styles.row}>
        <div className={`item ${styles.cell}`}>Empty Weight</div>
        <div className={`weight ${styles.cell}`}>{emptyWeight.toFixed(2)}</div>
        <div className={`max ${styles.cell}`}>{maxWeight}</div>
        <div className={`delta ${styles.cell}`}>{Math.round(maxWeight - emptyWeight)}</div>
        <div className={`arm ${styles.cell}`}>{initial}</div>
        <div className={`moment ${styles.cell}`}>{emptyMoment}</div>
      </div>
      <div id="front-seats" className={styles.row}>
        <div className={`item ${styles.cell}`}>Front Seats</div>
        <div className={`weight ${styles.cell}`}>
          <input
            type="text"
            className={styles.userInput}
            id="front-seats-weight-input"
            onChange={(e) => { update(e, 'currrentFrontSeatWeight'); }}
          />
        </div>
        <div className={`max ${styles.cell}`}><i>N/A</i></div>
        <div className={`delta ${styles.cell}`}><i>N/A</i></div>
        <div className={`arm ${styles.cell}`}>{frontSeats}</div>
        <div className={`moment ${styles.cell}`}>{frontSeatsMoment || 0}</div>
      </div>
      <div id="rear-seats" className={styles.row}>
        <div className={`item ${styles.cell}`}>Rear Seats</div>
        <div className={`weight ${styles.cell}`}>
          <input
            type="text"
            className={styles.userInput}
            id="rear-seats-weight-input"
            onChange={(e) => { update(e, 'currentBackSeatWeight'); }}
          />
        </div>
        <div className={`max ${styles.cell}`}><i>N/A</i></div>
        <div className={`delta ${styles.cell}`}><i>N/A</i></div>
        <div className={`arm ${styles.cell}`}>{rearSeats}</div>
        <div className={`moment ${styles.cell}`}>{rearSeatsMoment || 0}</div>
      </div>
      <div id="fuel" className={styles.row}>
        <div className={`item ${styles.cell}`}>
          Fuel
          <br />
          (6 lbs / gal)
        </div>
        <div className={`weight ${styles.cell}`}>
          <input
            type="text"
            className={styles.userInput}
            id="fuel-weight-input"
            onChange={(e) => { update(e, 'currentFuelWeight'); }}
          />
          <br />
          {`(${(currentFuelWeight / 6).toFixed(1)} gal)`}
        </div>
        <div className={`max ${styles.cell}`}>
          {maxFuel}
          <br />
          {`(${(maxFuel / 6).toFixed(1)} gal)`}
        </div>
        <div className={`delta ${styles.cell}`}>{Math.round(maxFuel - currentFuelWeight) || ''}</div>
        <div className={`arm ${styles.cell}`}>{fuelPosition}</div>
        <div className={`moment ${styles.cell}`}>{fuelMoment || 0}</div>
      </div>
      <div id="cargo-1" className={styles.row}>
        <div className={`item ${styles.cell}`}>Baggage 1</div>
        <div className={`weight ${styles.cell}`}>
          <input
            type="text"
            className={styles.userInput}
            id="cargo-1-weight-input"
            onChange={(e) => { update(e, 'currentCargo1Weight'); }}
          />
        </div>
        <div className={`max ${styles.cell}`}>{cargoWeight1}</div>
        <div className={`delta ${styles.cell}`}>{Math.round(cargoWeight1 - currentCargo1Weight) || 0}</div>
        <div className={`arm ${styles.cell}`}>{cargoPosition1}</div>
        <div className={`moment ${styles.cell}`}>{cargo1Moment || 0}</div>
      </div>
      <div id="cargo-2" className={styles.row}>
        <div className={`item ${styles.cell}`}>Baggage 2</div>
        <div className={`weight ${styles.cell}`}>
          <input
            type="text"
            className={styles.userInput}
            id="cargo-2-weight-input"
            onChange={(e) => { update(e, 'currentCargo2Weight'); }}
          />
        </div>
        <div className={`max ${styles.cell}`}>{cargoWeight2}</div>
        <div className={`delta ${styles.cell}`}>{Math.round(cargoWeight2 - currentCargo2Weight) || 0}</div>
        <div className={`arm ${styles.cell}`}>{cargoPosition2}</div>
        <div className={`moment ${styles.cell}`}>{cargo2Moment || 0}</div>
      </div>
      <div id="total" className={`${styles.row} ${styles.total}`}>
        <div className={`item ${styles.cell}`}>Total</div>
        <div className={`weight ${styles.cell}`}>
          {totalWeight}
        </div>
        <div className={`max ${styles.cell}`}>{maxWeight}</div>
        <div className={`delta ${styles.cell}`}>{maxWeight - totalWeight}</div>
        <div className={`arm ${styles.cell}`}>{(totalMoment / totalWeight).toFixed(2)}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(totalMoment / initial)}</div>
      </div>
    </div>
  );
};

export default WeightBalanceTable;

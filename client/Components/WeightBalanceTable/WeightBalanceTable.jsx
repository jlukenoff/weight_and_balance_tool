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
    id,
    tailNumber,
    make,
    model,
    year,
    equipment,
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
  } = props;

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
        <div className={`weight ${styles.cell}`}>{emptyWeight}</div>
        <div className={`max ${styles.cell}`}>{maxWeight}</div>
        <div className={`delta ${styles.cell}`}>{Math.round(maxWeight - emptyWeight)}</div>
        <div className={`arm ${styles.cell}`}>{initial}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(emptyWeight * initial)}</div>
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
        <div className={`max ${styles.cell}`} />
        <div className={`delta ${styles.cell}`} />
        <div className={`arm ${styles.cell}`}>{frontSeats}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(currrentFrontSeatWeight * frontSeats) || 0}</div>
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
        <div className={`max ${styles.cell}`} />
        <div className={`delta ${styles.cell}`} />
        <div className={`arm ${styles.cell}`}>{rearSeats}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(currentBackSeatWeight * rearSeats) || 0}</div>
      </div>
      <div id="fuel" className={styles.row}>
        <div className={`item ${styles.cell}`}>
          Fuel
          <br />
          (tabs = 35gal)
        </div>
        <div className={`weight ${styles.cell}`}>
          <input
            type="text"
            className={styles.userInput}
            id="fuel-weight-input"
            onChange={(e) => { update(e, 'currentFuelWeight'); }}
          />
          (35.0/gal)
        </div>
        <div className={`max ${styles.cell}`}>{maxFuel}</div>
        <div className={`delta ${styles.cell}`} />
        <div className={`arm ${styles.cell}`}>{fuelPosition}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(currentFuelWeight * maxFuel) || 0}</div>
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
        <div className={`delta ${styles.cell}`}>{Math.round(cargoWeight1 - currentCargo1Weight) || ''}</div>
        <div className={`arm ${styles.cell}`}>{cargoPosition1}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(currentCargo1Weight * cargoPosition1) || 0}</div>
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
        <div className={`delta ${styles.cell}`}>{Math.round(cargoWeight2 - currentCargo2Weight) || ''}</div>
        <div className={`arm ${styles.cell}`}>{cargoPosition2}</div>
        <div className={`moment ${styles.cell}`}>{Math.round(currentCargo2Weight * cargoPosition2) || 0}</div>
      </div>
      <div id="total" className={`${styles.row} ${styles.total}`}>
        <div className={`item ${styles.cell}`}>Total</div>
        <div className={`weight ${styles.cell}`}>
          {currentBackSeatWeight + currentFuelWeight + currrentFrontSeatWeight + currentCargo1Weight + currentCargo2Weight}
        </div>
        <div className={`max ${styles.cell}`}>{maxWeight}</div>
        <div className={`delta ${styles.cell}`}>&Delta;</div>
        <div className={`arm ${styles.cell}`}>Arm</div>
        <div className={`moment ${styles.cell}`}>Moment</div>
      </div>
    </div>
  );
}

export default WeightBalanceTable;

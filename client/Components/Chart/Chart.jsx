import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.css';

const Chart = () => {
  return (
    <div className={styles.Chart} id="CoG-Graph">
      <Line
        height={200}
        width={400}
        data={{
          labels: [34, 36, 38, 40, 42, 44, 46],
          datasets: [
            {
              label: 'Weight (lbs)',
              data: [2419],
            },
            {
              label: 'CG (inches)',
              data: [43],
            },
          ],
          yAxesId: 'Weight (lbs)',
          xAxesId: 'CG (inches)',
        }}
        options={{
          title: {
            display: true,
            text: 'Center of Gravity',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
          maintainAspectRatio: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        }}
      />
    </div>
  );
};

export default Chart;

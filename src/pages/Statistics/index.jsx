import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import stats from './stats.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  useEffect(() => {
    //axios the data
  }, []);

  const data = {
    labels: ['user goes here', 'fetched stats data goes here'],
    datasets: [
      {
        label: 'users % that feel just like you ',
        data: [12, 19],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
    },
  };

  return (
    <>
      <div className={stats.container}>
        <div className={stats.header}>
          <h1 role="h1">This is the stats page</h1>
        </div>
        <div className={stats.chart}>
          <Pie data={data} />
        </div>
      </div>
    </>
  );
};

export default Statistics;

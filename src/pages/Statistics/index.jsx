import React, { useContext, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import stats from './stats.module.css';
import axios from 'axios';
import { SelectInputs } from '../../components';
import AppContext from '../../HelperContext/Context';


ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const [allData, setAllData] = useState(70);
  const [userData, setUserData] = useState(30);
  const { feeling } = useContext(AppContext);
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`https://fp-mental-health.herokuapp.com/stats/${feeling}/5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('resp.data.total', response.data.total);
        // console.log('resp', response);
        setAllData(response.data.total);
        setUserData(100 - allData);
        console.log(userData, allData, 'chartData');
      });
    // console.log('data', data);
    // console.log('data.token', token);
  }, [allData, feeling]);

  const data = {
    labels: ['% of people feeling like you', 'others'],
    datasets: [
      {
        label: 'users % that feel just like you ',
        data: [allData, userData],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
    },
  };
  console.log('pie data', data);

  return (
    <>
        <div className={stats.container}>
          <div className={stats.header}>
            <h2>Header</h2>
          </div>
          <h5>(dummydata) select a input</h5>
          <SelectInputs label="get stats" />
          <div className={stats.chart}>
            <Pie data={data} />
          </div>
        </div>
    </>
  );
};

export default Statistics;

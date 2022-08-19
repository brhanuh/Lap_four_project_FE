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

  let {
    userFeelObj,
    setUserFeelObj,
    userValueData,
    feeling,
    feelingValue,
    setFeelingValue,
  } = useContext(AppContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    axios
      .get(`https://fp-mental-health.herokuapp.com/recent/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log('resp.data', response.data);

        // userValueData = response.data;

        setUserFeelObj(response.data);
        // setFeelingValue(response.data);

        // console.log('UFO user', userFeelObj);
        // console.log('UFO FV', feelingValue);
      });

    axios
      .get(
        `https://fp-mental-health.herokuapp.com/stats/${feeling}/${feelingValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log('resp.data.total', response.data.total);
        // console.log('resp', response);
        setAllData(response.data.total);
        setUserData(100 - allData);
        // console.log(userData, allData, 'chartData');
      });
    // console.log('feeling', feeling);
    // console.log('feeling value', feelingValue);
    // console.log('data.token', token);
    // console.log('after switch', feeling);
  }, [allData, feeling]);
  const data = {
    labels: ['% of people feeling like you', 'others'],
    datasets: [
      {
        label: 'users % that feel just like you ',
        data: [allData, userData],
        backgroundColor: [
          'rgba(252, 157, 204, 0.8)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
    },
  };
  // console.log('pie data', data);

  return (
    <>
      <div className={stats.container}>
        <div className={stats.header}>
          <h2>Other Minds</h2>
        </div>
        <h4>Select a mood</h4>
        <SelectInputs label="get stats" />
        <div className={stats.chart}>
          <Pie data={data} />
        </div>
      </div>
    </>
  );
};

export default Statistics;

import React, { useRef } from 'react';
import styles from './chart.module.css';
import 'charts.css';

const ChartIcon = () => {
  return (
    <div>
      <table
        id={styles.animationsExample1}
        className="charts-css column hide-data show-labels show-primary-axis data-spacing-6"
      >
        <caption> Animation Example #1 </caption>
        <thead>
          <tr>
            <th scope="col">Year</th> <th scope="col">Progress </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> S </th>
            <td style={{ height: '20%' }}>
              <span class="data"> 20 </span>
            </td>
          </tr>
          <tr>
            <th scope="row"> T </th>
            <td style={{ height: '40%' }}>
              <span class="data"> 40 </span>
            </td>
          </tr>
          <tr>
            <th scope="row"> A </th>
            <td style={{ height: '60%' }}>
              <span class="data"> 60 </span>
            </td>
          </tr>
          <tr>
            <th scope="row"> T </th>
            <td style={{ height: '80%' }}>
              <span className="data"> 80 </span>
            </td>
          </tr>
          <tr>
            <th scope="row"> S </th>
            <td style={{ height: '100%' }}>
              <span class="data"> 100 </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChartIcon;

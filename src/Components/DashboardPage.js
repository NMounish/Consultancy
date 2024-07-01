// DashboardPage.js

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './DashboardPage.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = () => {
  const products = [
    { id: 1, name: 'Leather Jacket', sales: 150 },
    { id: 2, name: 'Leather Shoes', sales: 120 },
    { id: 3, name: 'Leather Belt', sales: 90 },
  ];

  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: '# of Sales',
        data: products.map(product => product.sales),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <h3>Top Selling Products This Season</h3>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default DashboardPage;

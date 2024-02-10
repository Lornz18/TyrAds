"use client"

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
);


const BarChart = () => {
  
  const options  = {
    plugins: {
      legend: {
        display: true
      }
    },
      scales:{
        y:{
          beginAtZero: true,
          grid:{
            display: false
          },
        },
        x:{
          beginAtZero: true,
          grid:{
            display: false
          }
        },
      }
    }
  
    const data = {
      labels: ['Oct','Nov','Dec', 'Jan', 'Feb'],
      datasets: [
        {
          label: 'Sales of the Week', // Changed labels to label
          data: [60,30,30,20,15],
          backgroundColor: '#535CE5',
          borderColor: '',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Sales of the Week', // Changed labels to label
          data: [50, 25, 20,15,10],
          backgroundColor: '#C8CBFD',
          borderColor: '',
          fill: true,
          tension: 0.4
        }
      ]
      
    };

  return (
    <Bar width={300} height={200} data={data} options={options}></Bar>
  )
}

export default BarChart
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
import { Line } from 'react-chartjs-2';

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
        display: false
      },
      title:{
        display: false
      }
    },
    scales:{
      y:{
        beginAtZero: true,
        grid:{
          display: false
        },
        ticks: {
          display: false
        }
      },
      x:{
        beginAtZero: true,
        grid:{
          display: false
        },
        ticks: {
          display: false
        }
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    elements: {
      point: {
        radius: 0
      }
    }
    }
  
    const data = {
      labels: ['', '', ''],
      datasets: [{
        label: 'Sales of the Week', // Changed labels to label
        data: [3, 9, 3],
        backgroundColor: '',
        borderColor: '#535CE5',
        fill: true,
        tension: .4
      }]
    };

  return (
    <Line data={data} options={options} ></Line>
  )
}

export default BarChart
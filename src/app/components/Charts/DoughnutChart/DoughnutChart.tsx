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
    ArcElement,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
  );

const DoughnutChart = () => {
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
            },
            border:{
                display: false
            }
          },
          x:{
            beginAtZero: true,
            
            grid:{
              display: false,
              
            },
            ticks: {
              display: false
            },
            border:{
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
            backgroundColor: [
                '#FBA419',
                '#EC624E',
                '#535CE5'
            ],
            borderColor: 'white',
            fill: true,
            tension: .4
          }]
        };
  return (
    <Doughnut data={data} options={options}></Doughnut>
    
  )
}

export default DoughnutChart
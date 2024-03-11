import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
 ArcElement,
  Legend,
} from "chart.js";
import { getlast7days } from "../../lib/features";
import { red } from "@mui/material/colors";

Chartjs.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getlast7days();
const lineChartoptions = {
  responsive: true,
  plugins: {
    legend: {
      displ: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      //display:false,
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      //display:false,
    },
  },
};

const doughnutChartOptions={
responsive:true,
plugins:{
    legend:{
        display:true,
    },
    title:{
        display: true,
    },
},
cutout:90,
};

const LineCharts = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "My Dataset3",
        data: value,
        borderColor: "rgba(88, 92, 192, 1)",
        backgroundColor: "rgba(88, 92, 192, 0.2)",
        fill: true,
      },
    ],
  };
  return <Line data={data} options={lineChartoptions} />;
};

const DoughnutCharts = ({value=[],labels}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "total chart vs group chart",
        data: value,
        borderColor: ['blue','red'],
        hoverBackgroundColor:"green",
        backgroundColor: ['red', 'blue'],
        offset:20,
      },
    ],
  };
  return <Doughnut data={data}style={{zIndex:10}} options={doughnutChartOptions} />;
};

export { LineCharts, DoughnutCharts };

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const {transactions} = useContext(GlobalContext);

// const income_data = transactions.filter(t => t.amount > 0);
// const expense_data = transactions.filter(t => t.amount < 0);

export default function ExpenseChart() {

const {transactions} = useContext(GlobalContext);

const income_data = transactions.filter(t => t.amount > 0);
const expense_data = transactions.filter(t => t.amount < 0);

  const data = {
    labels: transactions.map(t => t.text)
    , 
    datasets: [
    {
      type: 'line',
      label: 'Income',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data:income_data.map(t=>t.amount),
    },
    {
      type:'bar',
      label: 'Expense',
      backgroundColor: 'rgb(75, 192, 192)',
      data:expense_data.map(t=>Math.abs(t.amount)),
      borderColor: 'white',
      borderWidth: 2,
    },
  
  ],
};

  return <Chart type='bar' data={data} />;
}

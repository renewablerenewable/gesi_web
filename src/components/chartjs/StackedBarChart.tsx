import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StackedBarChartProps {
  title?: string;
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({ title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5],
        backgroundColor: '#ED6E85',
        barThickness: 50,
      },
      {
        label: 'Dataset 2',
        data: [3],
        backgroundColor: '#F1A354',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [10],
        backgroundColor: '#F7CE6B',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [10],
        backgroundColor: '#4598F8',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [10],
        backgroundColor: '#7845F6',
        barThickness: 50,
      },
    ],
  };

  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

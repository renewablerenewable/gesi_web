import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface BarChartProps {
  title?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ title }) => {
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
        data: [12],
        backgroundColor: '#F7CE6B',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [20],
        backgroundColor: '#4598F8',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [15],
        backgroundColor: '#7845F6',
        barThickness: 50,
      },
    ],
  };

  return (
    <div className="w-full">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

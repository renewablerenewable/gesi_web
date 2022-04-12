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

interface StackedMultiBarChartProps {
  title?: string;
}

export const StackedMultiBarChart: React.FC<StackedMultiBarChartProps> = ({
  title,
}) => {
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
    labels: ['산업', '건물', '수송'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 20, 14],
        backgroundColor: '#ED6E85',
        barThickness: 50,
      },
      {
        label: 'Dataset 2',
        data: [3, 5, 7],
        backgroundColor: '#F1A354',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [10, 12, 5],
        backgroundColor: '#F7CE6B',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [10, 8, 7],
        backgroundColor: '#4598F8',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [10, 15, 9],
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

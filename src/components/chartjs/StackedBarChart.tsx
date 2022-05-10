import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ChartData,
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
  simulation?: object;
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({ title, simulation }) => {
  const [data, setData] = useState<ChartData<"bar", number[], unknown>>({
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
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
          lineHeight: 2.0,
        }
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



  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

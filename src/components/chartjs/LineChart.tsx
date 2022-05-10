import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  title?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
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
  };

  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 1, 4, 6, 7, 10],
        borderColor: '#ED6E85',
        backgroundColor: '#ED6E85',
        barThickness: 50,
      },
      {
        label: 'Dataset 2',
        data: [5, 6, 12, 46, 1, 18],
        borderColor: '#F1A354',
        backgroundColor: '#F1A354',
        barThickness: 50,
      },
      {
        label: 'Dataset 3',
        data: [12, 16, 2, 18, 30, 11],
        borderColor: '#F7CE6B',
        backgroundColor: '#F7CE6B',
        barThickness: 50,
      },
    ],
  };

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
};

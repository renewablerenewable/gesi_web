import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

interface PieChartProps {
  labels: string[];
  amount: number[];
  title?: string;
}

export const PieChart: React.FC<PieChartProps> = ({
  labels,
  amount,
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
  };

  const data = {
    labels,
    datasets: [
      {
        // label: 'Dataset 1',
        backgroundColor: [
          '#ED6E85',
          '#F1A354',
          '#F7CE6B',
          '#6CBDBF',
          '#4598F8',
          '#7845F6',
          '#C9CBCF',
        ],
        data: amount,
        barThickness: 20, // width of bar
        datalabels: { display: false },
        options: {},
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-1/2 mx-auto">
      <Pie
        data={data}
        options={options}
        // style={{ height: '200px' }}
      />
    </div>
  );
};

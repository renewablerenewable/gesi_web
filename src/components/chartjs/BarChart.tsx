import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ChartData,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip
);

interface BarChartProps {
  title?: string;
  simulation?: object;
}

const backgroundColor: string[] = ['#ED6E85', '#F1A354', '#F7CE6B', '#4598F8', '#7845F6']

export const BarChart: React.FC<BarChartProps> = ({ title, simulation }) => {
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
      },
    },
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<"bar", number[], unknown> = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    Object.entries(simulation).forEach(([key, value], index) => {
      newData.datasets.push({
        label: key,
        data: [value],
        barThickness: 50,
        backgroundColor: backgroundColor[index]
      });
    });
    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  return (
    <div className="w-full">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

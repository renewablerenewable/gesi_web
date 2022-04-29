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

interface StackedMultiBarChartProps {
  title?: string;
  simulation?: object;
}

// Need to apply some color scheme
const backgroundColor: string[] = ['#ED6E85', '#F1A354', '#F7CE6B', '#4598F8', '#7845F6', '#150234', '#BC3EDF']

export const StackedMultiBarChart: React.FC<StackedMultiBarChartProps> = ({
  title,
  simulation
}) => {
  const [data, setData] = useState<ChartData<"bar", number[], unknown>>(
    {
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
    }
  );
  
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

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<"bar", number[], unknown> = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    Object.entries(simulation).forEach(([key, value], index) => {
      if (key !== 'total') {
        let stackData = [];
        for (const _key in value) {
          if (_key !== 'total')
            stackData.push(value[_key]);
        }
        newData.datasets.push({
          label: key,
          data: stackData,
          barThickness: 50,
          backgroundColor: backgroundColor[index]
        })
      }
    })

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

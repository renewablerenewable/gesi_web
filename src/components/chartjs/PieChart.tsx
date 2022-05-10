import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ChartData,
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
  labels?: string[];
  amount?: number[];
  title?: string;
  simulation?: object;
}

const backgroundColor: string[] = [
  '#ED6E85',
  '#F1A354',
  '#F7CE6B',
  '#6CBDBF',
  '#4598F8',
  '#7845F6',
  '#C9CBCF',
]

export const PieChart: React.FC<PieChartProps> = ({
  labels,
  amount,
  title,
  simulation,
}) => {
  const [data, setData] = useState<ChartData<"pie", number[], string>>({
    labels: [],
    datasets: [
      {
        data: [1]
      }
      // {
      //   // label: 'Dataset 1',
      //   backgroundColor: backgroundColor,
      //   data: [2, 5, 2, 8],
      //   borderWidth: 1,
      // },
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
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<"pie", number[], string> = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    let newLabels: string[] = [];
    let newDatasetData: number[] = [];

    if (labels) {
      newLabels = labels;
      
      for (const label of newLabels) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;
          newDatasetData.push(simulation[_key]);
        }
      }
    } else {
      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          newLabels.push(key);
          newDatasetData.push(value);
        }
      });
    }

    newData.labels = newLabels;
    newData.datasets.push({
      backgroundColor: backgroundColor,
      data: newDatasetData,
      borderWidth: 1,
    })
    
    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  // Simulation 없이도 PieChart를 사용하는 곳이 있다. 
  if (simulation === undefined && labels && amount) {
    let newData: ChartData<"pie", number[], string> = JSON.parse(JSON.stringify(data));
    newData.datasets = [
      {
        // label: 'Dataset 1',
        backgroundColor: backgroundColor,
        data: amount,
        // barThickness: 20, // width of bar
        // datalabels: { display: false },
        // options: {},
        borderWidth: 1,
      },
    ]

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

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

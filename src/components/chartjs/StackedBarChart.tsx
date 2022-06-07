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
  labels?: string[];
  lineLabels?: string[];
  simulation?: object;
  labelMap?: { [name: string]: string };
}

const backgroundColor: string[] = [
  '#8dd3c7', 
  '#ffffb3', 
  '#bebada', 
  '#fb8072', 
  '#80b1d3', 
  '#fdb462', 
  '#b3de69', 
  '#fccde5', 
  '#d9d9d9', 
  '#bc80bd', 
  '#ccebc5', 
  '#ffed6f'
];

export const StackedBarChart: React.FC<StackedBarChartProps> = ({ 
  title, 
  labels,
  lineLabels,
  simulation,
  labelMap,
}) => {
  const [data, setData] = useState<ChartData<"bar", number[], unknown>>({
    labels: [''],
    datasets: [
      // {
      //   label: 'Dataset 1',
      //   data: [5],
      //   backgroundColor: '#ED6E85',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 2',
      //   data: [3],
      //   backgroundColor: '#F1A354',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 3',
      //   data: [10],
      //   backgroundColor: '#F7CE6B',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 3',
      //   data: [10],
      //   backgroundColor: '#4598F8',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 3',
      //   data: [10],
      //   backgroundColor: '#7845F6',
      //   barThickness: 50,
      // },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12
        }
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

  if (simulation) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    if (labels) {
      for (const [idx, label] of labels.entries()) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;

          let newLabel = label;

          if (labelMap)
            newLabel = labelMap[label as string];

          newData.datasets.push({
            type: 'bar',
            label: newLabel,
            data: [simulation[_key]],
            barThickness: 50,
            backgroundColor: backgroundColor[idx]
          });
        }
      }
    }
    if (lineLabels) {
      for (const [idx, label] of lineLabels.entries()) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;

          let newLabel = label;

          if (labelMap)
            newLabel = labelMap[label as string];

          newData.datasets.push({
            type: 'line',
            label: newLabel,
            data: [simulation[_key]],
            // barThickness: 50,
            backgroundColor: backgroundColor[10]
          });
        }
      }
    }

    // console.log(newData, simulation)
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

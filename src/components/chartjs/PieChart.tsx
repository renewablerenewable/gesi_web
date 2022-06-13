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
  labelMap?: { [name: string]: string };
  className?: string;
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
  '#ffed6f',
];

export const PieChart: React.FC<PieChartProps> = ({
  labels,
  amount,
  title,
  simulation,
  labelMap,
  className,
}) => {
  const [data, setData] = useState<ChartData<'pie', number[], string>>({
    labels: [],
    datasets: [
      {
        data: [1],
      },
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
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += Number(context.parsed.toFixed(1)).toLocaleString();
            }
            return label;
          },
        },
      },
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
          lineHeight: 2.0,
        },
      },
    },
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<'pie', number[], string> = JSON.parse(
      JSON.stringify(data)
    );
    newData.datasets.length = 0;

    let newLabels: string[] = [];
    let newDatasetData: number[] = [];

    if (labels) {
      // newLabels = labels;

      for (const label of labels) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;
          newDatasetData.push(simulation[_key]);

          let newLabel = label;

          if (labelMap) newLabel = labelMap[label as string];

          newLabels.push(newLabel);
        }
      }
    } else {
      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let label = key;

          if (labelMap) label = labelMap[key as string];

          newLabels.push(label);
          newDatasetData.push(value);
        }
      });
    }

    newData.labels = newLabels;
    newData.datasets.push({
      backgroundColor: backgroundColor,
      data: newDatasetData,
      borderWidth: 1,
    });

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  // Simulation 없이도 PieChart를 사용하는 곳이 있다.
  if (simulation === undefined && labels && amount) {
    let newData: ChartData<'pie', number[], string> = JSON.parse(
      JSON.stringify(data)
    );
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
    ];

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  return (
    <div className={`w-full mx-auto ${className}`}>
      <Pie data={data} options={options} />
    </div>
  );
};

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
  labels?: string[];
  simulation?: object;
  labelMap?: { [name: string]: string };
  dataOptions?: object;
}

// Need to apply some color scheme
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

export const StackedMultiBarChart: React.FC<StackedMultiBarChartProps> = ({
  title,
  labels,
  simulation,
  labelMap,
  dataOptions,
}) => {
  const [data, setData] = useState<ChartData<'bar', number[], unknown>>({
    labels: [''],
    datasets: [
      // {
      //   label: 'Dataset 1',
      //   data: [5, 20, 14],
      //   backgroundColor: '#ED6E85',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 2',
      //   data: [3, 5, 7],
      //   backgroundColor: '#F1A354',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 3',
      //   data: [10, 12, 5],
      //   backgroundColor: '#F7CE6B',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 3',
      //   data: [10, 8, 7],
      //   backgroundColor: '#4598F8',
      //   barThickness: 50,
      // },
      // {
      //   label: 'Dataset 3',
      //   data: [10, 15, 9],
      //   backgroundColor: '#7845F6',
      //   barThickness: 50,
      // },
    ],
  });

  let options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += Number(context.parsed.y.toFixed(1)).toLocaleString();
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
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        max: undefined,
      },
    },
    maintainAspectRatio: undefined,
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<'bar', number[], unknown> = JSON.parse(
      JSON.stringify(data)
    );
    newData.datasets.length = 0;

    let newLabels: string[] = [];

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {
        if (key === 'max') options.scales.y.max = value;

        if (key === 'maintainAspectRatio') options.maintainAspectRatio = value;
      });
    }

    if (labels) {
      for (const label of labels) {
        let newLabel = label;

        if (labelMap) newLabel = labelMap[label as string];

        newLabels.push(newLabel);
      }

      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let newDatasetData: number[] = [];

          for (const label of labels) {
            if (value.hasOwnProperty(label)) {
              newDatasetData.push(value[label]);
            }
          }
          newData.datasets.push({
            label: key,
            data: newDatasetData,
            barThickness: 50,
            backgroundColor: backgroundColor[index],
          });
        }
      });
    } else {
      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let newDatasetData: number[] = [];

          for (const _key in value) {
            if (_key !== 'total') newDatasetData.push(value[_key]);

            if (newLabels.includes(_key) === false) newLabels.push(_key);
          }
          newData.datasets.push({
            label: key,
            data: newDatasetData,
            barThickness: 50,
            backgroundColor: backgroundColor[index],
          });
        }
      });
    }

    newData.labels = newLabels;

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

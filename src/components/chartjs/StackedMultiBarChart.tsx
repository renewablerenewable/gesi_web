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
  barLabels?: string[];
  simulation?: object;
  labelMap?: { [name: string]: string };
  barLabelMap?: { [name: string]: string };
  dataOptions?: object;
  ylabel?: string;
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
  barLabels,
  labels,
  simulation,
  barLabelMap,
  labelMap,
  dataOptions,
  ylabel,
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
        title: {
          display: true,
          text: ylabel,
        },
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

    let newBarLabels: string[] = [];

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {
        if (key === 'max') options.scales.y.max = value;

        if (key === 'maintainAspectRatio') options.maintainAspectRatio = value;
      });
    }

    if (barLabels) {
      for (const barLabel of barLabels) {
        let newBarLabel = barLabel;

        if (barLabelMap) newBarLabel = barLabelMap[barLabel as string];

        newBarLabels.push(newBarLabel);
      }

      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let newLabel = key;

          if (labels) {
            if (labels.includes(key) === false) return;

            if (labelMap) newLabel = labelMap[key as string];
          }
          
          let newDatasetData: number[] = [];

          for (const barLabel of barLabels) {
            if (value.hasOwnProperty(barLabel)) {
              newDatasetData.push(value[barLabel]);
            }
          }
          newData.datasets.push({
            label: newLabel,
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

            if (newBarLabels.includes(_key) === false) newBarLabels.push(_key);
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

    newData.labels = newBarLabels;
    console.log(simulation)

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

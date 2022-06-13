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

interface StackedMultiBarLineChartProps {
  title?: string;
  labels?: string[];
  lineData?: string[];
  positiveBarData?: string[];
  negativeBarData?: string[];
  simulation?: object;
  labelMap?: { [name: string]: string };
  dataMap?: { [name: string]: string };
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

export const StackedMultiBarLineChart: React.FC<
  StackedMultiBarLineChartProps
> = ({
  title,
  labels,
  lineData,
  positiveBarData,
  negativeBarData,
  simulation,
  labelMap,
  dataMap,
  dataOptions,
}) => {
  const [data, setData] = useState<ChartData<'bar', number[], unknown>>({
    labels: [''],
    datasets: [],
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
        grid: {
          display: true,
          drawBorder: true,
          drawTicks: false,
          tickWidth: 0,
        },
      },
      y: {
        stacked: true,
        max: undefined,
        grid: {
          display: true,
          drawBorder: true,
          drawTicks: false,
          tickWidth: 0,
        },
      },
    },
    maintainAspectRatio: undefined,
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    let newLabels: string[] = [];
    let totalIndex = 0;

    if (title === undefined) {
      options.plugins.title = {
        display: false,
        text: undefined,
        font: {
          size: 16,
          weight: 'bold',
          lineHeight: 2.0,
        },
      };
    }

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {
        if (key === 'max') options.scales.y.max = value;

        if (key === 'maintainAspectRatio') options.maintainAspectRatio = value;

        if (key === 'legend') options.plugins.legend.position = value;

        if (key === 'xlabels' && value === true && labels) {
          if (labelMap) {
            newLabels = [];
            for (const label of labels) {
              newLabels.push(labelMap[label]);
            }
          } else {
            newLabels = labels;
          }
        } else if (labels) {
          newLabels = [];
          for (const label of labels) {
            newLabels.push('');
          }
        }
      });
    }

    // if data
    if ((lineData || positiveBarData || negativeBarData) && labels) {
      // for (const label of lineData) {
      //   let newLabel = label;
      //   newLabels.push(newLabel);
      // }

      if (positiveBarData) {
        for (const [index, data] of positiveBarData.entries()) {
          if (simulation.hasOwnProperty(data)) {
            type _keyType = keyof typeof simulation;
            const _key = data as _keyType;
            const value = simulation[_key];
            let newDatasetData: number[] = [];

            for (const label of labels) {
              newDatasetData.push(value[label]);
            }

            let newLabel = data;
            if (dataMap && dataMap.hasOwnProperty(data))
              newLabel = dataMap[data as string];

            newData.datasets.push({
              type: 'bar',
              label: newLabel,
              data: newDatasetData,
              barThickness: 1,
              backgroundColor: backgroundColor[totalIndex],
            });
            totalIndex += 1;
          }
        }
      }
      if (negativeBarData) {
        for (const [index, data] of negativeBarData.entries()) {
          if (simulation.hasOwnProperty(data)) {
            type _keyType = keyof typeof simulation;
            const _key = data as _keyType;
            const value = simulation[_key];
            let newDatasetData: number[] = [];

            for (const label of labels) {
              newDatasetData.push(value[label] * -1);
            }

            let newLabel = data;
            if (dataMap && dataMap.hasOwnProperty(data))
              newLabel = dataMap[data as string];

            newData.datasets.push({
              type: 'bar',
              label: newLabel,
              data: newDatasetData,
              barThickness: 1,
              backgroundColor: backgroundColor[totalIndex],
            });
            totalIndex += 1;
          }
        }
      }
      if (lineData) {
        for (const [index, data] of lineData.entries()) {
          if (simulation.hasOwnProperty(data)) {
            type _keyType = keyof typeof simulation;
            const _key = data as _keyType;
            const value = simulation[_key];
            let newDatasetData: number[] = [];

            for (const label of labels) {
              newDatasetData.push(value[label]);
            }

            let newLabel = data;
            if (dataMap && dataMap.hasOwnProperty(data))
              newLabel = dataMap[data as string];

            newData.datasets.push({
              type: 'line',
              label: newLabel,
              data: newDatasetData,
              barThickness: 1,
              backgroundColor: backgroundColor[totalIndex],
              pointRadius: 1,
            });
            totalIndex += 1;
          }
        }
      }
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
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ChartData,
  CategoryScale,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  title?: string;
  labels?: string[];
  simulation?: object;
  dataOptions?: object;
  range?: {[name: string]: number};
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

export const LineChart: React.FC<LineChartProps> = ({ 
  title, 
  labels,
  simulation,
  dataOptions,
  range
 }) => {
  const [data, setData] = useState<ChartData<"line", number[], unknown>>({
    labels: [''],
    datasets: [
      {
        data: [],
      }
    ]
  });

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: undefined
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
    elements: {
      point: {
        radius: 0,
      }
    },
    interaction: {
      // mode: 'nearest',
      // axis: 'x',
      intersect: false
    },
    scales: {
      y: {
        stacked: undefined,
      }
    }
  };

  if (simulation) {
    let newData: ChartData<"line", number[], unknown> = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    let newLabels: string[] = [];
  
    let start = 0;
    let end = 1;
    let negative = false;

    if (range) {
      start = range.start;
      end = range.end;
    }

    newLabels = Array(end - start).fill('');

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {
        if (key === 'legend')
          options.plugins.legend.position = value;
        if (key === 'stacked')
          options.scales.y.stacked = value;
        
        if (key === 'xlabels' && value === true) {
          newLabels = [];
          for (let i: number = 1; i <= (end - start + 1); i++) {
            newLabels.push(i.toString());
          }
        }

        if (key === 'negative')
          negative = value;

      });
    }
    newData.labels = newLabels;

    if (labels) {
      for (const [index, label] of labels.entries()) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;
          const value = simulation[_key];
          let newDatasetData: number[] = [];

          for (let i:number = start; i <= end; i++) {
            if (negative)
              newDatasetData.push(value[i.toString()] * (-1));
            else
              newDatasetData.push(value[i.toString()]);
          }
          
          newData.datasets.push({
            label: label,
            data: newDatasetData,
            borderColor: backgroundColor[index],
            backgroundColor: backgroundColor[index],
            fill: true
          });
        }
      }
    } else {
      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let newDatasetData: number[] = [];
  
          for (let i:number = start; i <= end; i++) 
            newDatasetData.push(value[i.toString()]);
          
          newData.datasets.push({
            label: key,
            data: newDatasetData,
            borderColor: backgroundColor[index],
            backgroundColor: backgroundColor[index],
            fill: true
          })
        }
      });
    }

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
};

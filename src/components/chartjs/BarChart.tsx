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
  labels?: string[];
  simulation?: object;
  labelMap?: { [name: string]: string };
  dataOptions?: object;
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

export const BarChart: React.FC<BarChartProps> = ({ 
  title, 
  labels,
  simulation,
  labelMap,  
  dataOptions 
}) => {
  const [data, setData] = useState<ChartData<"bar", number[], unknown>>({
    labels: [''],
    datasets: [
      {
        data: [],
      },
    ],
  });

  let options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'right' as const,
        display: false,
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
    scale: {
      y: {
        max: undefined,
      }
    }
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<"bar", number[], unknown> = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    let newLabels: string[] = [];
    let newDatasetData: number[] = [];

    // Default Values
    let barThickness = 50;

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {
        if (key === 'barThickness')
          barThickness = value;
        
        if (key === 'max')
          options.scale.y.max = value;
      });
    }

    if (labels) {
      for (const label of labels) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;
          newDatasetData.push(simulation[_key]);
          
          let newLabel = label;

          if (labelMap)
            newLabel = labelMap[label as string];
          
          newLabels.push(newLabel)
        }
      }
    } else {
      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let label = key;
  
          if (labelMap)
            label = labelMap[key as string];
  
          newLabels.push(label);
          newDatasetData.push(value)
        }
      });
    }

    newData.labels = newLabels;
    newData.datasets.push({
      data: newDatasetData,
      barThickness: barThickness,
      borderWidth: 1,
      backgroundColor: backgroundColor
    })
    
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

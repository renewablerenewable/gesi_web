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
  dataOptions?: object;
  order?: string[],
  reverse?: boolean;
}

// Need to apply some color scheme
const backgroundColor: string[] = [
  '#ED6E85',
  '#F1A354',
  '#F7CE6B',
  '#6CBDBF',
  '#4598F8',
  '#7845F6',
  '#C9CBCF',
]

export const StackedMultiBarChart: React.FC<StackedMultiBarChartProps> = ({
  title,
  labels,
  simulation,
  dataOptions,
  order,
  reverse, 
}) => {
  const [data, setData] = useState<ChartData<"bar", number[], unknown>>(
    {
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
    }
  );
  
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: title
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
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<"bar", number[], unknown> = JSON.parse(JSON.stringify(data));
    newData.datasets.length = 0;

    if (labels)
      newData.labels = labels;

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {        
        if (key === 'max')
          options.scales.y.max = value;
      });
    }
    
    if (reverse && order) {
      let stackData: { [key: string]: number[] } = {};
      for (const entry of order) {
        type _keyType = keyof typeof simulation;
        const _key = entry as _keyType;
        
        Object.entries(simulation[_key]).forEach(([key, value]) => {
          if (key === 'total')
            return;
          
          if (stackData.hasOwnProperty(key) === false)
            stackData[key] = [];  
          
          stackData[key].push(value as number);
        })
      }

      console.log(stackData)
      Object.entries(stackData).forEach(([key, value], index) => {
        console.log(key, value)
        newData.datasets.push({
          label: key,
          data: value,
          barThickness: 50,
          backgroundColor: backgroundColor[index]
        }); 
      });
    } else {
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
      });
    }

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

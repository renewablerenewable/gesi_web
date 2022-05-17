import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { BarChart } from '../components/chartjs/BarChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

const stackedBarChartOptions = {
  maintainAspectRatio: false,
}
const barChartOptions = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  barThickness: 20,
}
const upperLineChartLabels = ['heat_demand', 'dis_th']
const upperLineChartOptions = {
  stacked: true,
  xlabels: true,
  legend: 'top',
}
const lowerLineChartLabels = ['ch_th', 'dis_th', 'SOC_th']
const lowerLineChartOptions = {
  stacked: true,
  xlabels: false,
  legend: 'bottom',
  negative: true,
}
const summerRange = {
  start: 1,
  end: 71
}
const winterRange = {
  start: 5378,
  end: 5450
}

export const P2XConversionPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-rows-2 grid-cols-4 gap-10">
          <div className="row-span-2">
            <StackedMultiBarChart 
              title="건물 부분 에너지 소비"
              simulation={ simulationState.useSelector((state) => state?.P2H_consumption_change)  }
              dataOptions={ stackedBarChartOptions }
            />
          </div>
          <BarChart 
            title="화석연료 열 생산" 
            simulation={ simulationState.useSelector((state) => state?.P2H.F2H) }
            dataOptions={ barChartOptions }
          />
          <LineChart 
            title="여름"
            labels={ upperLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_h) }
            dataOptions={ upperLineChartOptions }
            range={ summerRange }
          />
          <LineChart 
            title="겨울"
            labels={ upperLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_h) }
            dataOptions={ upperLineChartOptions }
            range={ winterRange }
          />
          <BarChart 
            title="초과전력 열 생산" 
            simulation={ simulationState.useSelector((state) => state?.P2H.P2H) }
            dataOptions={ barChartOptions }
          />
          <LineChart
            labels={ lowerLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_h) }
            dataOptions={ lowerLineChartOptions }
            range={ summerRange }
          />
          <LineChart
            labels={ lowerLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_h) }
            dataOptions={ lowerLineChartOptions }
            range={ winterRange }
          />
        </div>
        {/* <div className="grid grid-cols-2 gap-10">
          <BarChart 
            title="F2H" 
            simulation={ simulationState.useSelector((state) => state?.P2H.F2H) }
          />
          <BarChart 
            title="P2H" 
            simulation={ simulationState.useSelector((state) => state?.P2H.P2H) }
          />
        </div> */}
      </div>
      <FillterBar />
    </div>
  );
};

import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { BarChart } from '../components/chartjs/BarChart';
import { FillterBar } from '../components/FillterBar';
import { scenarioState, simulationState } from '../plugins/ridge';

let stackedMultiBarChartLabels = ['home_2020', 'home_2030', 'commerce_2020', 'commerce_2030']
const stackedMultiBarChartLabelMap = {
  'home_2020': '가정 \'20',
  'home_2030': '가정 \'30',
  'home_2050': '가정 \'50',
  'commerce_2020': '상업 \'20',
  'commerce_2030': '상업 \'30',
  'commerce_2050': '상업 \'50',
}
const stackedMultiBarChartOptions = {
  maintainAspectRatio: false,
  // barThickness: 20,
}

const barChartOptions = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  barThickness: 20,
}

const upperLineChartLabels = ['P2H', 'heat_demand', 'dis_th', 'power_demend_without_p2h']
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
  let home_target = 'home_2030'
  let commerce_target = 'commerce_2030'
  if (scenarioState.useSelector((state) => state.target) === true) {
    home_target = 'home_2050'
    commerce_target = 'commerce_2050'
  }
  stackedMultiBarChartLabels = ['home_2020', home_target, 'commerce_2020', commerce_target]

  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-rows-2 grid-cols-4 gap-2">
          <div className="row-span-2">
            <StackedMultiBarChart 
              title="건물 부분 에너지 소비"
              labels={ stackedMultiBarChartLabels }
              simulation={ simulationState.useSelector((state) => state?.P2H_consumption_change)  }
              labelMap= { stackedMultiBarChartLabelMap }
              dataOptions={ stackedMultiBarChartOptions }
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

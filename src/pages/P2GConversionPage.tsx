import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { PieChart } from '../components/chartjs/PieChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

// const Labels2 = ['발전', '수송', '산업원료'];
// const Prices2 = [5, 2, 8];
const hydrogenDemandLabels = ['electricity_generation', 'transportation', 'industrial_material'];
const hydrogenDemandLabelMap = {
  'electricity_generation': '발전',
  'transportation': '수송',
  'industrial_material': '산업원료',
}
const upperLineChartLabels = ['gas_demand', 'gas_production', 'gas_discharging']
const upperLineChartOptions = {
  stacked: true,
  xlabels: true,
  legend: 'top',
}
const lowerLineChartLabels = ['gas_charging', 'gas_discharging', 'gas_SOC']
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

export const P2GConversionPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-rows-2 grid-cols-3 gap-10">
          <div className='row-span-2'>
            <PieChart
              // labels={Labels2}
              // amount={Prices2}
              title="발전설비별 전력생산비중"
              labels={ hydrogenDemandLabels }
              simulation={ simulationState.useSelector((state) => state?.P2G_hydrogen_demand) }
              labelMap={ hydrogenDemandLabelMap }
            />
          </div>
          <LineChart 
            title="여름"
            labels={ upperLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_g) }
            dataOptions={ upperLineChartOptions }
            range={ summerRange }
          />
          <LineChart 
            title="겨울"
            labels={ upperLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_g) }
            dataOptions={ upperLineChartOptions }
            range={ winterRange }
          />
          <LineChart
            labels={ lowerLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_g) }
            dataOptions={ lowerLineChartOptions }
            range={ summerRange }
          />
          <LineChart
            labels={ lowerLineChartLabels }
            simulation={ simulationState.useSelector((state) => state?.rep_g) }
            dataOptions={ lowerLineChartOptions }
            range={ winterRange }
            />
        </div>
        {/* <div className="grid grid-cols-2 gap-10">
          <PieChart
            // labels={Labels2}
            // amount={Prices2}
            // title="발전설비별 전력생산비중"
            title="부분별 수소 수요"
            simulation={ simulationState.useSelector((state) => state?.P2G_hydrogen_demand) }
          />
          <PieChart
            title="주요 지표"
            simulation={ simulationState.useSelector((state) => state?.P2G_core_indicators) }
          />
        </div> */}
      </div>
      <FillterBar />
    </div>
  );
};

import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge'

const upperLabels = ['Nuke', 'coal_PP', 'NG_PP', 'PP', 'CHP', 'PV', 'WT', 'other', 'battery_out', 'pumped_out']
const upperChartOptions = {
  stacked: true,
  xlabels: true,
  legend: 'top',
}
const lowerLabels = ['EV', 'P2H', 'E_boiler', 'battery_in', 'pumped_in', 'electrolysis', 'curtail']
const lowerChartOption = {
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

export const P2XBalancingPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          <LineChart 
            title="여름" 
            labels={ upperLabels }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ upperChartOptions } 
            range={ summerRange }
          />
          <LineChart 
            title="겨울" 
            labels={ upperLabels }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ upperChartOptions } 
            range={ winterRange }
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <LineChart 
            labels={ lowerLabels }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ lowerChartOption } 
            range={ winterRange }
          />
          <LineChart 
            labels={ lowerLabels }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ lowerChartOption } 
            range={ summerRange }
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

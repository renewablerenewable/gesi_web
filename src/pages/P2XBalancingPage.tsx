import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge'

const upperLabels = ['el_demand', 'Nuke', 'coal_PP', 'NG_PP', 'PP', 'CHP', 'PV', 'WT', 'other', 'battery_out', 'pumped_out']
const upperLabelMap = {
  'el_demand': 'el_demand',
  'Nuke' : '원자력',
  'coal_PP' : '석탄화력',
  'NG_PP' : 'LNG화력', 
  'PP' : '복합화력',
  'CHP' : '열병합',
  'PV' :'태양광',
  'WT' : '풍력',
  'other' : '기타',
  'battery_out' : '배터리 전력방출',
  'pumped_out' : '양수발전 전력생산'
}
const upperChartOptions = {
  stacked: true,
  xlabels: true,
  legend: 'top',
}
const lowerLabels = ['EV', 'P2H', 'E_boiler', 'battery_in', 'pumped_in', 'electrolysis', 'curtail']
const lowerLabelMap = {
  'EV' : '전기차 충전',
  'P2H' : 'P2H',
  'E_boiler' : '전기보일러',
  'battery_in' : '배터리 전력충전', 
  'pumped_in' : '양수발전 전력저장',
  'electrolysis' : '수전해설비',
  'curtail' : '출력제한'
}

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
            labelMap={ upperLabelMap }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ upperChartOptions } 
            range={ summerRange }
          />
          <LineChart 
            title="겨울" 
            labels={ upperLabels }
            labelMap={ upperLabelMap }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ upperChartOptions } 
            range={ winterRange }
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <LineChart 
            labels={ lowerLabels }
            labelMap={ lowerLabelMap }
            simulation={ simulationState.useSelector((state) => state?.rep) } 
            dataOptions={ lowerChartOption } 
            range={ winterRange }
          />
          <LineChart 
            labels={ lowerLabels }
            labelMap={ lowerLabelMap }
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

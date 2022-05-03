import React from 'react';
// import { LineChart } from '../components/chartjs/LineChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { FillterBar } from '../components/FillterBar';
import { scenarioState, simulationState } from '../plugins/ridge'

export const P2XBalancingPage = () => {
  let targetYear: string = "2030"
  if (scenarioState.useSelector((state) => state.target))
    targetYear = "2050"
  
  const order: string[] = ['init_year', 'end_year']
  
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        {/* <div className="grid grid-cols-2 gap-10">
          <LineChart title="여름" />
          <LineChart title="겨울" />
        </div> */}
        <div className="grid grid-cols-2 gap-10">
          <StackedMultiBarChart 
            title='가정 내 난방용 에너지 소비 변화'
            simulation={ simulationState.useSelector((state) => state?.P2H_consumption_change.home) }
            labels={ ["2020", targetYear ] }
            order={ order }
            reverse={ true }
          />
          <StackedMultiBarChart 
            title='산업 내 난방용 에너지 소비 변화'
            simulation={ simulationState.useSelector((state) => state?.P2H_consumption_change.commerce) }
            labels={ ["2020", targetYear ] }
            order={ order }
            reverse={ true }
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

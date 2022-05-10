import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { PieChart } from '../components/chartjs/PieChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

// Power Generation Chart Configuration
const powerGenerationLabels = ['WT', 'PV', 'CHP', 'Fcell', 'NG_PP_new', 'NG_PP_existing', 'coal_PP', 'Nuke', 'Other']

// Facility Configuration Chart Configuration
const facilityConfigurationLabels = ['Wind_on', 'Wind_off', 'PV', 'CHP', 'Fcell', 'NG_PP_new', 'NG_PP_existing', 'coal_PP', 'Nuke']
const facilityConfigurationChartOptions = {
  // barThickness: 20
  max: 500000
}

export const EnergySystemPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          {/* <div className="h-[100px]"> */}
          <PieChart
            title="발전설비별 전력생산비중"
            simulation={ simulationState.useSelector((state) => state?.power_generation) }
            labels={ powerGenerationLabels }
          />
          {/* </div> */}
          <BarChart 
            title="발전설비구성" 
            simulation={ simulationState.useSelector((state) => state?.facility_configuration) }
            dataOptions={ facilityConfigurationChartOptions }
            labels={ facilityConfigurationLabels }
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

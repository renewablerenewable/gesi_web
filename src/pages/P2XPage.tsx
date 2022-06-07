import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { StackedBarChart } from '../components/chartjs/StackedBarChart';
import { StackedMultiBarLineChart } from '../components/chartjs/StackedMultiBarLineChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

const P2XFacilityConfigurationLabels = ['DH_HP', 'DH_Boiler', 'Electric_boiler', 'Electrolysis', 'Gas_interface', 'b_interface', 'pumped', 'TES_DH', 'Gas_storage', 'Battery']
const P2XFacilityConfigurationChartOptions = {
  barThickness: 30
}

const P2XEnergyBalancingLabels = ['Electricity_demand', 'Other', 'Nuke', 'coal_PP', 'NG_PP_existing', 'NG_PP_new', 'Fcell', 'CHP', 'PV', 'WT']
const P2XEnergyBalancingPositiveData = ['Other', 'Nuke', 'coal_PP', 'NG_PP_existing', 'NG_PP_new', 'Fcell', 'CHP', 'PV', 'WT']
const P2XEnergyBalancingLineData = ['Electricity_demand']
const P2XEnergyBalancingDataMap = {
  'Electricity_demand': 'Electricity_demand', 
  'Other': 'Other', 
  'Nuke': 'Nuke', 
  'coal_PP': 'coal_PP', 
  'NG_PP_existing': 'NG_PP_existing', 
  'NG_PP_new': 'NG_PP_new', 
  'Fcell': 'Fcell', 
  'CHP': 'CHP', 
  'PV': 'PV', 
  'WT': 'WT'
}
const P2XExcessProductionUsageLabels = ['Curtailment', 'P2H', 'EV', 'Electric_boiler', 'Electrolysis']

export const P2XPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-3 gap-10">
          <BarChart 
            title="P2X 설비 구성"
            labels={ P2XFacilityConfigurationLabels }
            simulation={ simulationState.useSelector((state) => state?.facility_configuration) } 
            dataOptions={ P2XFacilityConfigurationChartOptions }
          />
          <StackedBarChart 
            title="에너지 밸런싱" 
            labels={ P2XEnergyBalancingPositiveData }
            lineLabels={ P2XEnergyBalancingLineData }
            simulation={ simulationState.useSelector((state) => state?.power_generation) }
            labelMap={ P2XEnergyBalancingDataMap }
          />
          <StackedBarChart 
            title="초과 생산량 활용" 
            labels={ P2XExcessProductionUsageLabels }
            simulation={ simulationState.useSelector((state) => state?.power_generation) }
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

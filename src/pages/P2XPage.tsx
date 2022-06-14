import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { StackedBarChart } from '../components/chartjs/StackedBarChart';
import { StackedMultiBarLineChart } from '../components/chartjs/StackedMultiBarLineChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

const P2XFacilityConfigurationLabels = ['DH_HP', 'DH_Boiler', 'Electric_boiler', 'Electrolysis', 'Gas_interface', 'b_interface', 'pumped', 'TES_DH', 'Gas_storage', 'Battery']
const P2XFacilityConfigurationLabelMap = {
  'DH_HP' : '지역난방 히트펌프', 
  'DH_Boiler' : '지역난방 보일러',
  'Electric_boiler' : '전기보일러',
  'Electrolysis' : '수전해설비', 
  'Gas_interface' : '수소 운영시스템', 
  'b_interface' : '배터리 운영시스템', 
  'pumped' : '양수발전', 
  'TES_DH' : '지역난방 열저장설비',
  'Gas_storage' : '수소저장소', 
  'Battery' : '배터리',
}
const P2XFacilityConfigurationChartOptions = {
  barThickness: 30
}

const P2XEnergyBalancingLabels = ['Electricity_demand', 'Other', 'Nuke', 'coal_PP', 'NG_PP_existing', 'NG_PP_new', 'Fcell', 'CHP', 'PV', 'WT']
const P2XEnergyBalancingPositiveData = ['Other', 'Nuke', 'coal_PP', 'NG_PP_existing', 'NG_PP_new', 'Fcell', 'CHP', 'PV', 'WT']
const P2XEnergyBalancingLineData = ['Electricity_demand']
const P2XEnergyBalancingDataMap = {
  'Electricity_demand': '전력 수요', 
  'Other': '기타', 
  'Nuke': '원자력', 
  'coal_PP': '석탄화력', 
  'NG_PP_existing': 'LNG화력(기존)', 
  'NG_PP_new': 'LNG화력(신규)', 
  'Fcell': '연료전지', 
  'CHP': '열병합', 
  'PV': '태양광', 
  'WT': '풍력'
}
const P2XExcessProductionUsageLabels = ['Curtailment', 'P2H', 'EV', 'Electric_boiler', 'Electrolysis']
const P2XExcessProductionUsageLabelMap = {
  'Curtailment' : '출력제한',
  'P2H' : 'P2H',
  'EV' : '전기차 충전',
  'Electric_boiler' : '전기보일러',
  'Electrolysis' : '수전해설비'
}

export const P2XPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-3 gap-10">
          <BarChart 
            title="P2X 설비 구성"
            labels={ P2XFacilityConfigurationLabels }
            labelMap={ P2XFacilityConfigurationLabelMap }
            simulation={ simulationState.useSelector((state) => state?.facility_configuration) } 
            dataOptions={ P2XFacilityConfigurationChartOptions }
            ylabel="MW, MWh"
          />
          <StackedBarChart 
            title="에너지 밸런싱" 
            labels={ P2XEnergyBalancingPositiveData }
            lineLabels={ P2XEnergyBalancingLineData }
            simulation={ simulationState.useSelector((state) => state?.power_generation) }
            labelMap={ P2XEnergyBalancingDataMap }
            ylabel="TWh"
          />
          <StackedBarChart 
            title="초과 생산량 활용" 
            labels={ P2XExcessProductionUsageLabels }
            labelMap={ P2XExcessProductionUsageLabelMap }
            simulation={ simulationState.useSelector((state) => state?.power_generation) }
            ylabel="TWh"
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

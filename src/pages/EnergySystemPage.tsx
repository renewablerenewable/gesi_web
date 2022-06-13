import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { PieChart } from '../components/chartjs/PieChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

// Power Generation Chart Configuration
const powerGenerationLabels = [
  'WT',
  'PV',
  'CHP',
  'Fcell',
  'NG_PP_new',
  'NG_PP_existing',
  'coal_PP',
  'Nuke',
  'Other',
];
const powerGenerationLabelMap = {
  WT: '풍력',
  PV: '태양광',
  CHP: '열병합',
  Fcell: '연료전지',
  NG_PP_new: 'LNG화력(신규)',
  NG_PP_existing: 'LNG화력(기존)',
  coal_PP: '석탄화력',
  Nuke: '원자력',
  Other: '기타',
};

// Facility Configuration Chart Configuration
const facilityConfigurationLabels = [
  'Wind_on',
  'Wind_off',
  'PV',
  'CHP',
  'Fcell',
  'NG_PP_new',
  'NG_PP_existing',
  'coal_PP',
  'Nuke',
];
const facilityConfigurationLabelMap = {
  Wind_on: '육상풍력',
  Wind_off: '해상풍력',
  PV: '태양광',
  CHP: '열병합',
  Fcell: '연료전지',
  NG_PP_new: 'LNG화력(신규)',
  NG_PP_existing: 'LNG화력(기존)',
  coal_PP: '석탄화력',
  Nuke: '원자력',
};
const facilityConfigurationChartOptions = {
  // barThickness: 20
  max: 500000,
};

export const EnergySystemPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          <PieChart
            title="발전설비별 전력생산비중"
            simulation={simulationState.useSelector(
              (state) => state?.power_generation
            )}
            labels={powerGenerationLabels}
            labelMap={powerGenerationLabelMap}
            className="w-1/2"
          />
          <BarChart
            title="발전설비구성"
            simulation={simulationState.useSelector(
              (state) => state?.facility_configuration
            )}
            dataOptions={facilityConfigurationChartOptions}
            labels={facilityConfigurationLabels}
            labelMap={facilityConfigurationLabelMap}
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

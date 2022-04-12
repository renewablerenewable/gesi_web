import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { PieChart } from '../components/chartjs/PieChart';
import { FillterBar } from '../components/FillterBar';

const Labels2 = ['WT', 'PV', 'CHP', 'Fcell'];
const Prices2 = [2, 5, 2, 8];

export const EnergySystemPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          {/* <div className="h-[100px]"> */}
          <PieChart
            labels={Labels2}
            amount={Prices2}
            title="발전설비별 전력생산비중"
          />
          {/* </div> */}
          <BarChart title="발전설비구성" />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

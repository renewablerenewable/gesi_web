import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { PieChart } from '../components/chartjs/PieChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

// const Labels2 = ['발전', '수송', '산업원료'];
// const Prices2 = [5, 2, 8];

export const P2GConversionPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        {/* <div className="grid grid-cols-3 gap-10">
          <PieChart
            // labels={Labels2}
            // amount={Prices2}
            title="발전설비별 전력생산비중"
            simulation={ simulationState.useSelector((state) => state?.P2G_hydrogen_demand) }
          />
          <LineChart title="여름" />
          <LineChart title="겨울" />
        </div> */}
        <div className="grid grid-cols-2 gap-10">
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
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

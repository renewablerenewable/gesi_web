import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { PieChart } from '../components/chartjs/PieChart';
import { FillterBar } from '../components/FillterBar';

const Labels2 = ['발전', '수송', '산업원료'];
const Prices2 = [5, 2, 8];

export const P2GConversionPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-3 gap-10">
          <PieChart
            labels={Labels2}
            amount={Prices2}
            title="발전설비별 전력생산비중"
          />
          <LineChart title="여름" />
          <LineChart title="겨울" />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { StackedBarChart } from '../components/chartjs/StackedBarChart';
import { FillterBar } from '../components/FillterBar';

export const P2XPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          <BarChart title="P2X 설비 구성" />
          <StackedBarChart title="에너지 밸런싱" />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

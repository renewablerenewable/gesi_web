import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { FillterBar } from '../components/FillterBar';

export const OverviewPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          <StackedMultiBarChart title="최종에너지 소비" />
          <BarChart title="온실가스 배출량" />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

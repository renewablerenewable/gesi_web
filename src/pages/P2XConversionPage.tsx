import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { FillterBar } from '../components/FillterBar';

export const P2XConversionPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-3 gap-10">
          <StackedMultiBarChart title="건물 부분 에너지 소비" />
          <LineChart title="여름" />
          <LineChart title="겨울" />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

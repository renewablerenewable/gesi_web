import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { FillterBar } from '../components/FillterBar';

export const P2XBalancingPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          <LineChart title="여름" />
          <LineChart title="겨울" />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

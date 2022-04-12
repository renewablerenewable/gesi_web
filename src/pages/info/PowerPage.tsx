import React from 'react';
import { LineChart } from '../../components/chartjs/LineChart';

export const PowerPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">발전부문</div>
        <div className="text-sm ">
          기준년도 현황 및 주요 특징 요약
          <br />
          발전부문에서 재생에너지 확대가 전환의 핵심 언급
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">재생에너지</div>
        <div className="grid grid-cols-2 gap-x-10 w-full pt-5">
          <div>
            <div>
              <div className="text-xl font-semibold col-span-2">기본 배경</div>
              <div className="space-y-8 mt-8">
                <div className="space-y-3">
                  <div className="font-semibold">WHY</div>
                  <div className="">재생에너지 확대가 중요한 이유</div>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold">현황</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    국내외 보급 추이
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold">전망</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    국내외 보급 전망(계획 및 시장)
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t my-8" />

            <div className="space-y-3">
              <div className="text-xl font-semibold">선택시 고려</div>
              <div className="space-y-8 mt-8">
                <div className="space-y-3">
                  <div className="font-semibold">PV{`>`}WT</div>
                  <div className="">장단점</div>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold">PV{`>`}WT</div>
                  <div className="">장단점</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold">온실가스 배출량</div>
            <LineChart />
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">P3W7</div>
              <div>특징</div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">P5W5</div>
              <div>특징</div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">P7W3</div>
              <div>특징</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-5">
        <div className="text-xl font-semibold">Reference</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold">Reference 1</div>
            <div>
              이 같은 장기목표를 달성하기 위해서는 단기적인 노력이 중요하다.
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold">Reference 2</div>
            <div>
              이 같은 장기목표를 달성하기 위해서는 단기적인 노력이 중요하다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

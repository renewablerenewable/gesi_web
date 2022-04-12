import React from 'react';
import { LineChart } from '../../components/chartjs/LineChart';

export const BuildingPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">건물부문</div>
        <div className="text-sm ">
          건물은 사람이 살아가는데 필요한 가장 기본적인 공간이다. 건물 부분 총
          에너지 소비량은 지속적으로 증가하고 있다. 주요국에서는 건물부문의
          효율향상 및 온실가스 배출량 감소를 위한 도전적인 목표를 수립하고
          정책적 지원을 강화하고 있다. 2050년 탄소중립 시나리오안에서 건물부문
          탄소중립을 위해 건축물 에너지 효율향상, 고효율기기 보급, 스마트에너지
          관리, 저탄소·청정에너지 보급, 행태개선을 설정하였다.
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">Retrofit</div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-full pt-5">
          <div>
            <div className="text-xl font-semibold col-span-2">기본 배경</div>
            <div className="space-y-8 mt-8">
              <div className="space-y-3">
                <div className="font-semibold">WHY</div>
                <div className="">
                  리트로핏이 건물부문에서 가장 중요한 감축수단?
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold">현황</div>
                <div className="">내용내용내용내용내용내용</div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold">전망</div>
                <div className="">내용내용내용내용내용내용</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold">에너지 소비량</div>
            <LineChart />
          </div>

          <div className="space-y-3 col-span-2">
            <div className="font-semibold">Check Point!</div>
            <div className="">
              건물부문에서 주거용(가정)은 난방과 취사에서 화석연료를 사용한다.
              특히 노후 건축물은 최근 지어진 건축물에 비해 난방 효율이 40% 정도
              낮다. -주거용 건물 중 지은지 30년 이상 된 노후 건축물의 비중은 15%
              정도 -우리나라는 주거환경은 아파트 중심(61%)이며, 높은 아파트의
              임차율(42.3%)
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

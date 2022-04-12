import React from 'react';
import { BarChart } from '../../components/chartjs/BarChart';

export const NDCPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">탄소중립</div>
        <div className="text-sm ">
          탄소중립은 ~ 국제사회에서 많은 국가들이 2050년을 탄소중립의 목표로
          삼고 있다. 이 같은 장기목표를 달성하기 위해서는 단기적인 노력이
          중요하다.
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">NDC</div>
        <div className="grid grid-cols-2 gap-x-10 w-full pt-5">
          <div>
            <div>
              <div className="text-xl font-semibold col-span-2">기본 배경</div>
              <div className="space-y-8 mt-8">
                <div className="space-y-3">
                  <div className="font-semibold">WHY</div>
                  <div className="">NDC 목표가 탄소중립에 중요한 이유?</div>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold">전망</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    2030년 국가 온실가스 감축목표(Nationally Determined
                    Contribution, NDC)는 2050년 탄소중립 목표 달성을 위한
                    중간목표이다. 기후위기 심각성 및 국제사회 구성원으로
                    우리나라의 역할 등을 종합적으로 고려하여 국가 온실가스
                    감축목표 상향안을 마련하였고, 2021년 10월에 우리나라 2030년
                    국가 온실가스 감축목표를 2018년 대비 40%로 확정하였다.
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t my-8" />

            <div className="space-y-3">
              <div className="text-xl font-semibold">기본 배경</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                IPCC(기후변화에 관한 정부간 협의체)의 지구 온도 상승을 1.5도
                이내로 제한하기 위해서는 2030년까지 2010년 대비 45% 이상
                감축해야 한다고 권고했다. 국내 환경단체는 더 강한 기후대응
                노력을 위해서 2018년 대비 50% 이상 감축할 것을 촉구하였다.
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold">온실가스 배출량</div>
            <BarChart />
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">35</div>
              <div>
                2030년 국가 온실가스 감축목표(Nationally Determined
                Contribution, NDC)
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">40</div>
              <div>
                2030년 국가 온실가스 감축목표(Nationally Determined
                Contribution, NDC)
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">45</div>
              <div>
                2030년 국가 온실가스 감축목표(Nationally Determined
                Contribution, NDC)
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">50</div>
              <div>
                2030년 국가 온실가스 감축목표(Nationally Determined
                Contribution, NDC)
              </div>
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

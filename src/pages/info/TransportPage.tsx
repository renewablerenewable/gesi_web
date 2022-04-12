import React from 'react';
import { LineChart } from '../../components/chartjs/LineChart';

export const TransportPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">수송부문</div>
        <div className="text-sm ">
          수송부문은 화석연료 사용 비중이 약 97%에 달하며, 소비되는 연료는
          대부분 석유(휘발유, 경유, LPG 등)이다. 수송부문은 크게 도로, 철도,
          해운, 항공으로 구분되지만, 도로부문의 온실가스 배출량이 전체 배출량의
          96%를 차지하고 있다. 따라서 수송부문의 탄소중립 달성을 위해서는
          도로부문에서의 탈탄소화가 가장 중요하다. 이미 전세계는 친환경
          모빌리티를 중심으로 재편되고 있으며, 국내에서도 전기차로 대표되는
          친환경차의 보급 확대를 위해 적극적으로 지원하고 있는 상황이다.
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">전기차</div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-full pt-5">
          <div>
            <div className="text-xl font-semibold col-span-2">기본 배경</div>
            <div className="space-y-8 mt-8">
              <div className="space-y-3">
                <div className="font-semibold">WHY</div>
                <div className="">
                  전기차는 기존 내연기관차에 비해 다양한 장점을 갖는다. 우선
                  전기를 사용하여 작동함으로써 대기오염물질(CO2, 미세먼지 등)의
                  배출이 발생하지 않는다. 또한, 일반적으로 에너지 효율이 훨씬
                  높아 집약적 에너지 소비를 가능하게 한다. 이외에도 신재생에너지
                  및 신규 기술과의 연계를 통해 전력망의 안정성 향상 등
                  사회전반에 미치는 영향이 크다.
                </div>
              </div>
              <div className="space-y-3 col-span-2">
                <div className="font-semibold">Check Point!</div>
                <div className="">
                  전기차는 기존 내연기관차에 비해 다양한 장점을 갖는다. 우선
                  전기를 사용하여 작동함으로써 대기오염물질(CO2, 미세먼지 등)의
                  배출이 발생하지 않는다. 또한, 일반적으로 에너지 효율이 훨씬
                  높아 집약적 에너지 소비를 가능하게 한다. 이외에도 신재생에너지
                  및 신규 기술과의 연계를 통해 전력망의 안정성 향상 등
                  사회전반에 미치는 영향이 크다.
                </div>
              </div>
              <div className="space-y-3 col-span-2">
                <div className="font-semibold">참고</div>
                <div className="">
                  1. 전기차 비중: 2020년 0.6%(13만대), 2030년 정부목표
                  12.3%(300만대)
                  <br />
                  2. NDC 상향안: 2030년 전기차 보급목표 362만대
                  <br />
                  3. 완성차업체의 전기차 생산 전략 및 2030년 공급잠재량 추정치
                </div>
              </div>
            </div>
          </div>

          <div>
            <LineChart title="전기차 대수" />
            <LineChart title="에너지 소비량" />
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">10%</div>
              <div>
                누적보급대수 243만대, 느린 기술 개발 및 인프라 확충 미비로
                정부목표에 미달
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">15%</div>
              <div>
                누적보급대수 487만대, 친환경차 시장의 활성화 및 이른 시점의
                전기차 경제성 강화
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">20%</div>
              <div>누적보급대수 365만대, NDC 상향안(2021) 목표 달성</div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">25%</div>
              <div>
                누적보급대수 609만대, 완성차업체의 전기차 생산 및 공급목표 달성
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

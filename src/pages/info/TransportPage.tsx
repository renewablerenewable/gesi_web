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
                  전기를 사용하여 작동함으로써 운행 중 대기오염물질(CO2, 미세먼지 등)이
                  발생하지 않는다. 또한, 내연기관 및 수소차 대비 에너지 효율이 상대적으로
                  높아 에너지 소비량이 적다는 장점이 있다. 이외에도 신재생에너지 및 신규 
                  기술과의 연계를 통해 전력망의 안정성 향상 등 사회전반에 미치는 영향이 크다.
                </div>
              </div>
              <div className="space-y-3 col-span-2">
                <div className="font-semibold">Check Point!</div>
                <div className="">
                  친환경차는 기술개발 속도, 이용 환경 등이 다각적으로 검토되어 보급 속도가
                  결정되어야 한다. 너무 급진적인 전환은 자동차 산업 및 고용에 부정적 영향을
                  미칠 수 있기 때문이다. 하지만 국제적으로 탈내연기관 선언이 이어지고 있다는
                  점은 급진적 전환이 필요한 상황임을 보여주고 있으며, 변화를 주도하지 못한다면
                  자칫 국제 시장에서 도태될 위험성도 존재한다. 또한, 기후변화의 심각성이 점차 
                  체감됨에 따라 내연기관차에 대한 규제도 점차 강화되고 있다.
                  * EU는 2035년부터 내연기관 신차 판매를 금지할 계획이다. 2020년 11월 우리나라
                  국가기후환경회의는 2035년에 내연기관 판매 중단을 제안한 바 있다. 서울시는
                  2035년부터 내연기관차 신규 등록 금지르 추진하고 있다.
 
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
            <div className="text-[#059669] font-bold"> 2</div>
            <div>
              2030 국가 온실가스 감축목표(NDC) 상향안(2021.10.18. 관계부처 합동)
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold"> 3</div>
            <div>
              제4차 친환경자동차 기본계획(2021~2025)(2021.2. 관계부처 합동) 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

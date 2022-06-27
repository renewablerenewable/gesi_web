import React from 'react';
import { LineChart } from '../../components/chartjs/LineChart';

export const BuildingPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">건물부문</div>
        <div className="text-sm ">
          건물부문의 탈탄소화는 건물의 에너지 효율화와 건물에너지 수요의 전기화 크게 두가지 방식으로 진행된다.  건물의 에너지 효율화는 건물에서 사용하는 에너지 수요를 줄이는 데 촛점을 맞추고 있다. 건물의 수요 중 가장 큰 비중을 차지하고 있는 난방과 냉방과 같은 온도에 관련된 에너지 수요는 건축물의 단열 설비와 밀접한 관계가 있다. 건물의 외벽 및 창호에 대한 개선을 통해 건물에서 사용하는 열에너지 수요의 감소를 꾀할 수 있다. 최근에는 ICT와 연동하여 건물 에너지 소비를 최적화하는 BEMS (Building Energy Management System) 등을 통해 냉난방뿐만 아니라 전기에너지 소비를 줄이는 노력을 하고 있다. 

건물 에너지 효율화와 더불어 건물 에너지의 전기화는 효율향상만으로 제거되지 않는 화석연료 사용을 전기화하여 건물의 직접배출을 간접배출로 전환하는 것이다. 하지만 건물의 전기화가 탈탄소화로 이어지기 위해서는 전환부문의 탈탄소화 속도와 보조를 맞춰야 한다. 

앞서 설명한 에너지 효율 향상은 전기화를 해야하는 에너지 수요를 줄이는 역할을 함으로써 전환부문으로 넘어가는 간접배출의 양을 줄일 수 있다.
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
                  건물부문의 에너지 소비와 공급을 결정할 수 있는 여러가지의 시나리오 요소들이 있지만 그 중 가장 중요하고 포괄적인 시나리오 요소가 필요했다. 건물의 외벽과 냉난방 시설 그리고 종합적인 건물 관리 체계가 한꺼번에 변화할 수 있는 건물의 재건축 혹은 대대적인 리모델링의 실행이 가장 중요한 시나리오 요소로 간주하였다. 

건물의 재건축과 대대적인 리모델링이 가장 중요하고 포괄적인 시나리오 요소인 이유는 사용연한이 길고 항시 누군가가 거주 혹은 사용하는 건물의 특성상 건물의 단열공사와 BEMS 같은 건물 관리체계가 점진적으로 개선되는 경우는 드물고 재건축과 리모델링 시 전면적인 개선이 일어나기 때문이다. 또한 재건축과 리모델링의 속도는 기술적인 장벽보다는 주거 형태의 변화, 도심개발 등 다른 사회적인 요인이 크게 작용한다. 따라서 건물의 탄소중립을 위해 재건축과 리모델링의 속도를 어떻게 설정할 지는 다양한 이해관계당사자들의 논의가 필요한 상황이다.

여기서는 건물의 재건축과 대대적인 리모델링이 앞서 설명한 에너지 효율화와 전기화의 시기를 앞당긴다고 가정하였다. 반대로 재건축과 리모델링이 늦어질 경우 효율향상과 전기화의 속도가 늦어질 뿐 아니라 에너지 수요를 줄이지 못하여 2050년에 전기화를 통해 간접배출시켜야 하는 건물에너지의 양도 크다고 가정하였다. 
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold">현황</div>
                <div className="">지금 현재 우리나라 건축물은 약 719만동이고 총 연면적은 37억 5천만 m2 로 파악되고 증가하는 추세이다. 2018년 기준 전력의 사용비중(43.9%)이 가장 높고 도시가스(31.4%)가 두번째로 많이 소비되는 에너지원이다.  2010년에 건축물의 단열기준이 강화되어서 30년전 건물에 비해 난방에너지 사용량이 31-43% 정도 감축되었지만 2018년 기준 2010년 이전 건축된 건축물이 74%에 이른다. </div>
              </div>
              <div className="space-y-3">
                <div className="font-semibold">전망</div>
                <div className="">건축물의 연면적 기준으로 연간 0.5%, 1%, 1.5%, 2% 의 연면적이 재건축 혹은 리모델링 되는 4가지 시나리오를 가정하였다. 참고로 지금 현재 재건축 혹은 리모델링 관련 통계는 발표된 바 없다. 다만 매년 기존 건축물 연면적의 0.4%가 멸실되었다는 통계를 바탕으로 기존 건축물의 연면적의 0.4% 가 재건축을 하고 있다고 추측할 수 있다. </div>
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

import React from 'react';
import { Card } from '../../components/Card';
import { LineChart } from '../../components/chartjs/LineChart';
import { PieChart } from '../../components/chartjs/PieChart';
import { Table } from '../../components/Table';

const Labels2 = ['발전', '수송', '산업원료'];
const Prices2 = [5, 2, 8];

export const IndustryPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">산업부문</div>
        <div className="text-sm ">
          산업부문은 우리나라 경제성장의 핵심축이지만, 에너지 다소비 산업구조는
          국가 온실가스 감축에 가장 큰 걸림돌이다. 산업부문의 온실가스 배출량의
          국가 전체의 <span className="text-red-700 font-semibold">35%</span>{' '}
          가량이고, 최종에너지 소비는{' '}
          <span className="text-red-700 font-semibold">약 60%</span>로 매우 높은
          비중을 차지한다. 특히, 화석연료 소비의 상당 부분이 제품의 원료로
          사용되고, 다양한 업종별로 에너지 소비 및 온실가스 배출 특성이 달라
          다른 부문보다 탄소중립을 달성하는 것이 매우 어려운 상황이다.
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">
          효율 개선 {`&`} 에너지원 전환
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-full pt-5">
          <div>
            <div className="text-xl font-semibold col-span-2">기본 배경</div>
            <div className="space-y-8 mt-8">
              <div className="space-y-3">
                <div className="font-semibold">WHY</div>
                <div className="">
                  "산업부문은 화석연료를 연료 및 원료의 용도로 사용한다. 우선
                  연료로 사용되는 화석연료를 줄이기 위해서 크게 두 가지 방안을
                  고려할 수 있다. 첫째는 에너지 효율 개선을 통해 에너지 사용량을
                  줄이는 것이고, 둘째는 에너지원을 비화석연료로 전환하는 것이다.
                  이는 현재 기술을 효율적으로 사용하면서 점차 새로운 기술로
                  바꿔나가는 것을 의미한다. 최종적으로 산업부문의 연료로
                  사용되는 에너지원은 전력과 열로 구성된다.
                  <br /> 원료로 사용되는 화석연료를 대체하는 것은 보다 복잡한
                  과정이 필요하다. 석탄은 철강산업과 시멘트산업에서, 석유는 정유
                  및 석유화학산업에서 원료로 사용하고 있다. 철강산업은 전기로
                  생산 비중을 늘려나가는 방식으로, 정유 및 석유화학산업은 화학적
                  재활용 및 대체원료 사용을 모색해야 한다. "{' '}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold">온실가스 배출량</div>
            <PieChart labels={Labels2} amount={Prices2} />
          </div>

          <div className="space-y-3 col-span-2">
            <div className="font-semibold">Check Point!</div>
            <div className="">
              "산업부문 온실가스 감축을 급격하게 진행할 경우 산업의 국제
              경쟁력에 어려움을 초래할 가능성이 있다. 또한, 전후방 산업들을
              중심으로 구조조정을 야기할 수 있으며, 급격한 구조조정은 산업생태계
              유지, 좌초자산 문제, 고용 등에서 많은 부작용이 예상된다.
              연료로써의 화석연료는 대부분 고온의 열을 발생시키기 위해 사용되며,
              이 같은 고온의 열은 전기를 통해서도 얻을 수 있다. 정유산업은
              원유를 수입 및 가공하여 석유제품을 생산한다. 휘발유, 디젤은
              수송부문의 연료로 주로 소비되고, 나프타는 석유화학산업의 원료로서
              사용된다. 수송부문의 탈내연기관 및 석유화학산업의 탈탄소화는
              정유산업의 어두운 전망을 보여준다. 수소는 철강 및 석유화학산업에서
              주요 원료로써 활용될 수 있다."
            </div>
          </div>

          <div className="col-span-2 flex">
            <LineChart title="에너지소비량" />
            <LineChart title="전력화비중" />
            <LineChart title="수소수요" />
          </div>

          <div className="col-span-2">
            <Card>
              <Table>
                <Table.Head>
                  <Table.Row>
                    <Table.Th></Table.Th>
                    <Table.Th></Table.Th>
                    <Table.Th>약</Table.Th>
                    <Table.Th>중</Table.Th>
                    <Table.Th>강</Table.Th>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  <Table.Row key={1}>
                    <Table.Td>에너지효율</Table.Td>
                    <Table.Td></Table.Td>
                    <Table.Td>-1%/년</Table.Td>
                    <Table.Td>+0%/년</Table.Td>
                    <Table.Td>+1%/년</Table.Td>
                  </Table.Row>

                  <Table.Row key={2}>
                    <Table.Td>전력화(%)</Table.Td>
                    <Table.Td>2030년</Table.Td>
                    <Table.Td>56</Table.Td>
                    <Table.Td></Table.Td>
                    <Table.Td></Table.Td>
                  </Table.Row>

                  <Table.Row key={3}>
                    <Table.Td></Table.Td>
                    <Table.Td>2050년</Table.Td>
                    <Table.Td>79</Table.Td>
                    <Table.Td>84</Table.Td>
                    <Table.Td>90</Table.Td>
                  </Table.Row>

                  <Table.Row key={4}>
                    <Table.Td>수소(TWh)</Table.Td>
                    <Table.Td>2030년</Table.Td>
                    <Table.Td>10</Table.Td>
                    <Table.Td>12</Table.Td>
                    <Table.Td>13</Table.Td>
                  </Table.Row>

                  <Table.Row key={5}>
                    <Table.Td></Table.Td>
                    <Table.Td>2040년</Table.Td>
                    <Table.Td>21</Table.Td>
                    <Table.Td>31</Table.Td>
                    <Table.Td>45</Table.Td>
                  </Table.Row>

                  <Table.Row key={6}>
                    <Table.Td></Table.Td>
                    <Table.Td>2050년</Table.Td>
                    <Table.Td>38</Table.Td>
                    <Table.Td>68</Table.Td>
                    <Table.Td>111</Table.Td>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
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

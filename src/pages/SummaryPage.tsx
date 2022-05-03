import React from 'react';
import { FillterBar } from '../components/FillterBar';
import { TextField } from '../components/TextField';
import { simulationState } from '../plugins/ridge';

export const SummaryPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 mt-5">
        <div className="border p-10 bg-white mx-4">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="pr-10">최종 에너지 소비</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <TextField 
                      type="number" 
                      value={ simulationState.useSelector((state) => state?.energy_demand.total.total) } 
                      readOnly
                    />
                    <div>TWh</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>온실가스 배출량</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <TextField 
                      type="number" 
                      value={ simulationState.useSelector((state) => state?.emissions.total) } 
                      readOnly
                    />
                    <div>MtCO2</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>재생에너지 비중</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <TextField 
                      type="number" 
                      // value={  } 
                      readOnly
                    />
                    <div>%</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Curtailment</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <TextField 
                      type="number" 
                      value={ simulationState.useSelector((state) => state?.power_generation.Curtailment) } 
                      readOnly
                    />
                    <div>TWh</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <div className="bg-blue-100 text-blue-800 w-max px-6 py-1.5 text-sm rounded font-medium">
            TIP
          </div>
          <div>2020년 대비 -40%</div>
          <div>2020년 대비 -40%</div>
          <div>년평균 증가율: PV +10GW/년, WT +5GW/년</div>
        </div>
      </div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">한줄 요약</div>
        <div className="text-sm ">
          대법원장의 임기는 6년으로 하며, 중임할 수 없다. 근로자는 근로조건의
          향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다.
          정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적
          의사형성에 참여하는데 필요한 조직을 가져야 한다. 공개하지 아니한
          회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령의 임기는
          5년으로 하며, 중임할 수 없다. 이 헌법시행 당시의 법령과 조약은 이
          헌법에 위배되지 아니하는 한 그 효력을 지속한다.
        </div>
      </div>
      <FillterBar />
    </div>
  );
};

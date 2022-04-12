import React, { useState } from 'react';
import { Button } from './Button';
import { LabelButton } from './LabelButton';

import { SelectButton } from './SelectButton';

export const FillterBar = () => {
  const [target, setTarget] = useState<boolean>(false);
  const [ndc, setNdc] = useState<number>(0);
  const [transport, setTransport] = useState<number>(0);
  const [building, setBuilding] = useState<number>(0);
  const [industry, setIndustry] = useState<number>(0);
  const [powerPv, setPowerPv] = useState<number>(0);
  const [powerWt, setPowerWt] = useState<number>(0);

  return (
    <div className="border p-5 bg-white my-5 mx-4">
      <div className="grid grid-cols-3 gap-x-10 gap-y-5">
        <div className="flex">
          <LabelButton to="" label="Target" />

          <div className="flex items-center">
            <div className="label px-3">단기</div>
            <SelectButton
              text="2030"
              selected={!target}
              onClick={() => setTarget(false)}
            />
          </div>
          <div className="flex items-center">
            <div className="label px-3">장기</div>
            <SelectButton
              text="2050"
              selected={target}
              onClick={() => setTarget(true)}
            />
          </div>
        </div>

        <div className="flex col-span-2">
          <LabelButton to="/info/ndc" label="NDC" />

          <div className="flex items-center">
            <div className="label px-3">감축목표</div>
            <SelectButton
              text="35"
              selected={ndc === 0}
              onClick={() => setNdc(0)}
            />
            <SelectButton
              text="40"
              selected={ndc === 1}
              onClick={() => setNdc(1)}
            />
            <SelectButton
              text="45"
              selected={ndc === 2}
              onClick={() => setNdc(2)}
            />
            <SelectButton
              text="50"
              selected={ndc === 3}
              onClick={() => setNdc(3)}
            />
          </div>
        </div>

        <div className="col-span-3 border-t border-gray-100" />

        <div className="flex">
          <LabelButton to="/info/transport" label="Transport" />
          <div className="mx-3 space-y-1 my-1">
            <div className="label">BEV 비중</div>
            <div className="flex items-center">
              <SelectButton
                text="10"
                selected={transport === 0}
                onClick={() => setTransport(0)}
              />
              <SelectButton
                text="15"
                selected={transport === 1}
                onClick={() => setTransport(1)}
              />
              <SelectButton
                text="20"
                selected={transport === 2}
                onClick={() => setTransport(2)}
              />
              <SelectButton
                text="25"
                selected={transport === 3}
                onClick={() => setTransport(3)}
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <LabelButton to="/info/building" label="Building" />
          <div className="mx-3 space-y-1 my-1">
            <div className="label">리트로핏률</div>
            <div className="flex items-center">
              <SelectButton
                text="0.5"
                selected={building === 0}
                onClick={() => setBuilding(0)}
              />
              <SelectButton
                text="1.0"
                selected={building === 1}
                onClick={() => setBuilding(1)}
              />
              <SelectButton
                text="1.5"
                selected={building === 2}
                onClick={() => setBuilding(2)}
              />
              <SelectButton
                text="2.0"
                selected={building === 3}
                onClick={() => setBuilding(3)}
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <LabelButton to="/info/industry" label="Industry" />
          <div className="mx-3 space-y-1 my-1">
            <div className="label">효율개선{`&`}에너지원 전환</div>
            <div className="flex items-center">
              <SelectButton
                text="약"
                selected={industry === 0}
                onClick={() => setIndustry(0)}
              />
              <SelectButton
                text="중"
                selected={industry === 1}
                onClick={() => setIndustry(1)}
              />
              <SelectButton
                text="강"
                selected={industry === 2}
                onClick={() => setIndustry(2)}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 border-t border-gray-100" />

        <div className="flex col-span-3">
          <div className="flex-1 flex">
            <LabelButton to="/info/power" label="Power" />

            <div className="flex items-center mr-5">
              <div className="label px-3">PV 비중</div>
              <SelectButton
                text="0.5"
                selected={powerPv === 0}
                onClick={() => setPowerPv(0)}
              />
              <SelectButton
                text="0.7"
                selected={powerPv === 1}
                onClick={() => setPowerPv(1)}
              />
              <SelectButton
                text="0.9"
                selected={powerPv === 2}
                onClick={() => setPowerPv(2)}
              />
            </div>

            <div className="flex items-center">
              <div className="label px-3">PV 비중</div>
              <SelectButton
                text="0.5"
                selected={powerWt === 0}
                onClick={() => setPowerWt(0)}
              />
              <SelectButton
                text="0.3"
                selected={powerWt === 1}
                onClick={() => setPowerWt(1)}
              />
              <SelectButton
                text="0.1"
                selected={powerWt === 2}
                onClick={() => setPowerWt(2)}
              />
            </div>
          </div>
          <Button text="시나리오 생성	+" className="filled-deep-blue px-8" />
        </div>
      </div>
    </div>
  );
};

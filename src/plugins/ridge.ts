import { newRidgeState } from 'react-ridge-state';
import { Scenario, Simulation } from '../types';
import { getData } from '../data';

export const tokenState = newRidgeState<string | null>(null, {
  onSet: (newState) => {
    if (newState) {
      localStorage.setItem('token', newState);
    } else {
      localStorage.removeItem('token');
    }
  },
});

export const osState = newRidgeState<string>('');

export const activationState = newRidgeState<boolean>(false);

export const scenarioState = newRidgeState<Scenario>(
  {
    target: false,
    ndc: 0,
    transport: 0,
    building: 0,
    industry: 0,
    powerPv: 0,
    powerWt: 0
  },
  {
    onSet: async (newState) => {
      if (newState) {
        getData(newState.target, newState.ndc, newState.transport, newState.building, newState.industry,newState.powerPv,newState.powerWt)
        .then((data) => {
          // console.log(data);
          simulationState.set(data as Simulation);
        });
      }
    }
  }
);

export const simulationState = newRidgeState<Simulation | null>(null)

function setInitialState() {
  const token = localStorage.getItem('token');
  tokenState.set(token);
}

setInitialState();

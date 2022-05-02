
import { ndcMap, transportMap, buildingMap, industryMap, powerPvMap, powerWtMap } from './types'

export async function getData(target: boolean, ndc: number, transport: number, building: number, industry: number, powerPv: number, powerWt: number) {

  const year = target ? 2050 : 2030;
  const _ndc = ndcMap[ndc];
  const bevShares = transportMap[transport]
  const buildingRetrofitRate = buildingMap[building]
  const industryDecarbonizationLevel = industryMap[industry]
  const pv = powerPvMap[powerPv]
  const wt = powerWtMap[powerWt]

  let file = null;
  
  if (target) {
      file = `${year}_${pv}_${wt}_${buildingRetrofitRate}_${industryDecarbonizationLevel}.json`
  } else {
      file = `${year}_${_ndc}_${pv}_${wt}_${buildingRetrofitRate}_${bevShares}_${industryDecarbonizationLevel}.json`
  }
  const url = `/data/${file}`

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => {
    return response.json();
  })
}

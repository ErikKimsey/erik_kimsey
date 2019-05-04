import React from 'react';
import * as d3 from "d3";
import { setLocalStorageData, checkLocalStorageData } from '../../utils/localStorageUtils';
import { clean_data } from '../../utils/dataManipulation';

export const draw = (data, container, clientDim) => {
  let w = clientDim.w, h = clientDim, _data;
  if(checkLocalStorageData('data')){
    _data = checkLocalStorageData('data');
    console.log(_data);
    let cleanedData = clean_data(_data.list)
    console.log(cleanedData);

    let hData = d3.stratify()
      .id((d)=>{
        console.log(d.main.temp);
        
        return d.main.temp;
      })
      .parentId((d)=>{
        console.log(d.dt);
        
        return d.dt;
      })(cleanedData);

    console.log(hData);
    
    // let hData = d3.stratify()
    // .id( (d) => { return d.dt; }) // return the id instead of the name
    // .parentId(function (d) { return d.temp })
    // (cleanedData);
    // console.log(hData);
    // console.log(hData);
    // let packedLayout = d3.pack(vRoot);

  } else if (data.length != 0) {
    console.log(data);
    
    let cleanedData = clean_data(data);
    console.log(cleanedData);
    // let hData = d3.stratify()(cleanedData);
    // console.log(hData);
    // let vRoot = d3.hierarchy(hData).sum(d => d.temp);
    // let packedLayout = d3.pack(vRoot);
  }
  
    // let body = d3.select(container).append('svg')
    //   .attr('w', w)
    //   .attr('h', h)
    //   .style('fill', 'pink');

}

/**
 * 0: {temp: 298.21, temp_min: 295.7, temp_max: 298.21, pressure: 1011.91, sea_level: 1011.91, …}
1: {temp: 296.98, temp_min: 295.1, temp_max: 296.98, pressure: 1010.38, sea_level: 1010.38, …}
2: {temp: 296.46, temp_min: 295.2, temp_max: 296.46, pressure: 1007.95, sea_level: 1007.95, …}
3: {temp: 290.86, temp_min: 290.234, temp_max: 290.86, pressure: 1007.66, sea_level: 1007.66, …}
4: {temp: 289.3, temp_min: 289.3, temp_max: 289.3, pressure: 1008.24, sea_level: 1008.24, …}
5: {temp: 287.872, temp_min: 287.872, temp_max: 287.872, pressure: 1007.52, sea_level: 1007.52, …}
6: {temp: 286.998, temp_min: 286.998, temp_max: 286.998, pressure: 1006.46, sea_level: 1006.46, …}
7: {temp: 286.6, temp_min: 286.6, temp_max: 286.6, pressure: 1007.56, sea_level: 1007.56, …}
8: {temp: 288.602, temp_min: 288.602, temp_max: 288.602, pressure: 1008.7, sea_level: 1008.7, …}
9: {temp: 292.5, temp_min: 292.5, temp_max: 292.5, pressure: 1008.95, sea_level: 1008.95, …}
10: {temp: 292.102, temp_min: 292.102, temp_max: 292.102, pressure: 1008.51, sea_level: 1008.51, …}
11: {temp: 287.7, temp_min: 287.7, temp_max: 287.7, pressure: 1010.37, sea_level: 1010.37, …}
12: {temp: 285.402, temp_min: 285.402, temp_max: 285.402, pressure: 1012.68, sea_level: 1012.68, …}
13: {temp: 284.448, temp_min: 284.448, temp_max: 284.448, pressure: 1013.25, sea_level: 1013.25, …}
14: {temp: 283.7, temp_min: 283.7, temp_max: 283.7, pressure: 1014.3, sea_level: 1014.3, …}
15: {temp: 286.3, temp_min: 286.3, temp_max: 286.3, pressure: 1016.32, sea_level: 1016.32, …}
16: {temp: 292, temp_min: 292, temp_max: 292, pressure: 1017.15, sea_level: 1017.15, …}
17: {temp: 295.751, temp_min: 295.751, temp_max: 295.751, pressure: 1016.5, sea_level: 1016.5, …}
18: {temp: 292.7, temp_min: 292.7, temp_max: 292.7, pressure: 1015.7, sea_level: 1015.7, …}
 */

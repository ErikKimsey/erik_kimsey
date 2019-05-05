import React from 'react';
import * as d3 from "d3";
import { setLocalStorageData, checkLocalStorageData } from '../../utils/localStorageUtils';
import { clean_data } from '../../utils/dataManipulation';

export const draw = (data, container, clientDim) => {
  let w = clientDim.w, h = clientDim.h;
  let sData = d3.hierarchy(data).sum((d)=>{
    console.log(d);
  })

  let layout = d3.pack().size([w,h]).padding(3);
  let root = d3.hierarchy(sData);

  console.log(root);

}



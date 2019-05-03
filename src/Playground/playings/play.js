import React from 'react';
import * as d3 from "d3";

export const draw = (data, container, clientDim) => {
  let w = clientDim.w, h = clientDim.h;
  
  let body = d3.select(container).append('svg')
    .attr('w', w)
    .attr('h', h)
    // .attr(back);
  console.log(data[0]);
  

  if(data != undefined) {
    body.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('className','data-point')
      .text((d) => {
        console.log(d);  
        return d.main.temp;      
      });
  }
  

}

import React from 'react';
import * as d3 from "d3";

export const draw = (data, container, clientDim) => {
  let w = clientDim.w, h = clientDim.h;
  
  if(data.length != 0) {
    // let body = d3.select(container).append('svg')
    //   .attr('w', w)
    //   .attr('h', h)
    //   .style('fill', 'pink');
    
    let layout = d3.pack().size([w,h]);

      let root = {children: data.slice()};
      let nodes = d3.hierarchy(root).sum((d) => { 
        return d; 
      });
    console.log(nodes);
    
    // body.selectAll('circle')
    //   .data(data)
    //   .enter()
    //   .append('circle')
    //   .attr('className','data-point')
    //   .style('fill', 'pink')
    //   .text((d) => {
    //     // console.log(d);  
    //     return d.main.temp;      
    //   });
  }
  

}

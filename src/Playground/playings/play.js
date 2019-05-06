import React from 'react';
import * as d3 from 'd3';
import { setLocalStorageData, checkLocalStorageData } from '../../utils/localStorageUtils';
import { clean_data } from '../../utils/dataManipulation';

export const draw = (data, container, clientDim) => {
	let w = clientDim.w,
		h = clientDim.h;
	// console.log(`h: ${h}, w: ${w}`);

	let layout = d3.pack().size([ w / 2, h ]).padding(10);
	let root = d3.hierarchy(data);
	root.sum((d) => {
		// console.log(d);

		return d.level;
	});

	/**
   *     var simulation = d3.forceSimulation()
            .force("collide",d3.forceCollide( function(d){
              	return d.r + 8 }).iterations(16) 
            )
            .force("charge", d3.forceManyBody())
            .force("y", d3.forceY().y(h / 2))
            .force("x", d3.forceX().x(w / 2))
   */

	let simulation = d3
		.forceSimulation()
		.force(
			'collide',
			d3
				.forceCollide((d) => {
					return d.r + 8;
				})
				.iterations(16)
		)
		.force('charge', d3.forceManyBody())
		.force('x', d3.forceX().x(w / 2))
		.force('y', d3.forceY().y(h / 2));

	layout(root);

	let cont = d3.select(container).select('svg g');

	let circles = cont.selectAll('circle').data(root.descendants());

	let circlesEnter = circles
		.enter()
		.append('circle')
		.attr('cx', (d) => {
			return d.x;
		})
		.attr('cy', (d) => {
			return d.y;
		})
		.attr('r', (d) => {
			console.log(d.r);

			return d.r;
		})
		.style('opacity', 0.1);

	circles.merge(circlesEnter);
};

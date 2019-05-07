import React from 'react';
import * as d3 from 'd3';
import { setLocalStorageData, checkLocalStorageData } from '../../utils/localStorageUtils';
import { clean_data } from '../../utils/dataManipulation';

export const draw = (data, container, clientDim) => {
	let w = clientDim.w,
		h = clientDim.h;
	// console.log(`h: ${h}, w: ${w}`);

	let layout = d3.pack().size([ w / 3, h / 3 ]);
	let root = d3.hierarchy(data);
	root.sum((d) => {
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
		.force('center', d3.forceCenter().x(w / 3).y(h / 3))
		.force('collide', d3.forceCollide().strength(0.01).radius(30).iterations(1))
		.force('charge', d3.forceManyBody().strength(0.5));

	let cont = d3.select(container).select('svg').append('g');

	let circles = cont.selectAll('circle').data(root.descendants());

	let circlesEnter = circles
		.enter()
		.append('circle')
		.attr('cx', (d) => {
			return w / 2;
		})
		.attr('cy', (d) => {
			return h;
		})
		.attr('r', (d) => {
			console.log(d.value);

			return d.value * 5;
		})
		.style('opacity', 0.3);

	console.log(circlesEnter);

	circles = circles.merge(circlesEnter);

	simulation.nodes(root.descendants()).on('tick', (d) => {
		circles
			.attr('cx', (d) => {
				return d.x;
			})
			.attr('cy', (d) => {
				return d.y;
			});
	});
	layout(root);
};

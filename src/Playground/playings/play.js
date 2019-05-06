import React from 'react';
import * as d3 from 'd3';
import { setLocalStorageData, checkLocalStorageData } from '../../utils/localStorageUtils';
import { clean_data } from '../../utils/dataManipulation';

export const draw = (data, container, clientDim) => {
	let w = clientDim.w,
		h = clientDim.h;
	console.log(`h: ${h}, w: ${w}`);

	let layout = d3.pack().size([ w, h ]);
	let root = d3.hierarchy(data);
	root.sum((d) => {
		console.log(d);

		return d.level;
	});

	layout(root);

	let cont = d3.select(container).select('svg g');

	let circles = cont
		.selectAll('circle')
		.data(root.descendants())
		.enter()
		.append('circle')
		.attr('cx', (d) => {
			return d.x;
		})
		.attr('cy', (d) => {
			return d.y;
		})
		.attr('r', (d) => {
			return d.r;
		})
		.style('opacity', 0.1);
};

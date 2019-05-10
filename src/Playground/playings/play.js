import React from 'react';
import * as d3 from 'd3';
import { setLocalStorageData, checkLocalStorageData } from '../../utils/localStorageUtils';
import { clean_data } from '../../utils/dataManipulation';

export const draw = (data, container, clientDim) => {
	let w = clientDim.w,
		h = clientDim.h;

	let layout = d3.pack().size([ w / 3, h / 3 ]);
	let root = d3.hierarchy(data);
	root.sum((d) => {
		return d.level;
	});

	let simulation = d3
		.forceSimulation()
		.force('center', d3.forceCenter().x(w / 3).y(h / 3))
		.force('collide', d3.forceCollide().strength(0.01).radius(25).iterations(12))
		.force('charge', d3.forceManyBody().strength(0.5));

	let linearScale = d3.scaleLinear().domain([ 0, 20 ]).range([ 0, 500 ]);

	let sqrtScale = d3.scaleSqrt().domain([ 0, 100 ]).range([ 0, 50 ]);

	let cont = d3.select(container).select('svg').append('g');

	let circles = cont.selectAll('circle').data(root.descendants());

	let circlesEnter = circles
		.enter()
		.append('circle')
		.attr('cx', (d) => {
			return linearScale(d.value * 5);
		})
		.attr('cy', (d) => {
			return linearScale(d.value);
		})
		.attr('r', (d) => {
			return sqrtScale(d.value * 6);
		})
		.style('opacity', 0.5)
		.attr('fill', () => {
			return makeColor();
		})
		.call(drag(simulation))
		.on('mouseover', (d) => {
			// console.log('1 >>> ', d3.select(d).attr('r', 0));
			console.log('2 >>> ', d3.select(d)._groups[0]);
			console.log('3 >>>>', d3.select(d)._groups[0][0]);
			d3.selectAll(d).attr('r', 200);
		});
	// .on('mouseover', mouseOverHandler);
	// .on('mouseout', mouseOutHandler);

	simulation.nodes(root.descendants()).on('tick', (d) => {
		circlesEnter
			.attr('cx', (d) => {
				return d.x * 0.8;
			})
			.attr('cy', (d) => {
				return d.y;
			});
	});
	layout(root);
};

const drag = (simulation) => {
	function dragstarted(d) {
		if (!d3.event.active) simulation.alphaTarget(0.3).restart();
		d.fx = d.x;
		d.fy = d.y;
	}

	function dragged(d) {
		d.fx = d3.event.x;
		d.fy = d3.event.y;
	}

	function dragended(d) {
		if (!d3.event.active) simulation.alphaTarget(0);
		d.fx = null;
		d.fy = null;
	}

	return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
};

const mouseOverHandler = (e) => {
	console.log(this);
	// console.log(d3.select(e).attr('r'));
	// e.r = e.r + 10;
};
const mouseOutHandler = (e) => {
	// let radius = e.r - 5;
};

const alphaHexVals = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];

const makeColor = () => {
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += alphaHexVals[Math.floor(Math.random() * alphaHexVals.length)];
	}
	return color;
};

/**
 * d3.layout.pack()
    .sort(null)
    .size([width, height])
    .children(function(d) { return d.values; })
    .value(function(d) { return d.radius * d.radius; })
    .nodes({values: nested});
 */

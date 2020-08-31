import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './playground.scss';
// import { draw } from './playings/play';

export default class Playground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			containerDimens: {
				h: null,
				w: null
			}
		};
		this.container = React.createRef();
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {}

	drawGraph = (data, dimens) => {
		// draw(data, this.container, dimens);
	};

	render() {
		return <div className="playground-container" ref={(container) => (this.container = container)} />;
	}
}

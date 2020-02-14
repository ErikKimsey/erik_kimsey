import React, { Component } from 'react';
import ThreeScene from './ThreeScene/ThreeScene';
import './landing.scss';
import { data } from './data';
import IconLinks from '../IconLinks/IconLinks';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: null,
			height: null
		};
		this.landingBlurbs = React.createRef();
	}

	componentDidMount() {
		let { current } = this.landingBlurbs;
		this.setState({
			width: current.offsetWidth,
			height: current.offsetHeight
		});
		this.handleSetDimensions();
		// window.addEventListener('resize', () => {
		// 	this.handleSetDimensions();
		// });
	}

	handleSetDimensions() {
		// this.setState({
		// 	width: current.offsetWidth,
		// 	height: current.offsetHeight
		// });
	}

	handleGetDimensions() {}

	render() {
		if (this.state.width != null) {
			return (
				<div className="landing-container" ref={this.landingBlurbs}>
					<ThreeScene data={this.state} />
					{data.map((e, i) => {
						i += 1;
						return (
							<div className={`self-blurb-container blurb-${i}`} key={e}>
								{e}
							</div>
						);
					})}
					<IconLinks />
				</div>
			);
		} else {
			return (
				<div className="landing-container" ref={this.landingBlurbs}>
					{data.map((e, i) => {
						i += 1;
						return (
							<div className={`self-blurb-container blurb-${i}`} key={e}>
								{e}
							</div>
						);
					})}
					<IconLinks />
				</div>
			);
		}
	}
}

export default Landing;

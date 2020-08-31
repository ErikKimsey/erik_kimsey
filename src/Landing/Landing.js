import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
import { data } from './data';
import IconLinks from '../IconLinks/IconLinks';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0
		};
		this.landingBlurbs = React.createRef();
	}

	render() {
		return (
			<div className="landing-container" ref={(e) => (this.landingBlurbs = e)}>
				<Link className="playground-block" to="/playground">
					<h1>PLAYGROUND</h1>
					<i className="fas fa-house-damage fa-1x" />
				</Link>
				{data == null && <div className="null-data" />}
				{data &&
					data.map((e, i) => {
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

export default Landing;

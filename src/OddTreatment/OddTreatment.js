import React, { Component } from 'react';
import './odd_treatment.scss';
import OT_DATA from './ot_data';
import OT_Item from './components/ot_item';

export default class OddTreatment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		this.setState({ data: OT_DATA });
	}
	render() {
		return (
			<div className="oddtreatment-container">
				{this.state.data == null && <div className="null-data">NOPE</div>}
				{this.state.data &&
					this.state.data.map((e, i) => {
						return <OT_Item data={e} />;
						{
							/* return <div className={'data-item'}>{e}</div>; */
						}
					})}
			</div>
		);
	}
}

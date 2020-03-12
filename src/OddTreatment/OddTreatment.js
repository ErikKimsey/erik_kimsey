import React, { Component } from 'react';
import './odd_treatment.scss';
import OT_DATA from './ot_data';

export default class OddTreatment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
  }
  
  componentDidMount(){
    this.setState({data:OT_DATA})
  }
	render() {
		console.log(OT_DATA);
		return (
			<div className="oddtreatment-container">
				{this.state.data ? <div>{this.state.data[0]}</div> : <div className="no-data">NOPE</div>}
			</div>
		);
	}
}

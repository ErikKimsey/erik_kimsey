import React, { Component } from 'react';
import './styles/data_modal.scss';
import DataItem from './data_item';

class DataModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
  }

  handleToggle = () => {
    console.log('TOGGLING');
    
  }

  render(){
    return (
      <div className="modal-container" onClick={this.handleToggle}>
        <h1>{this.props.title}</h1>
        <div className="modal-triggered-container">
          <div className="list-container">
            {
              this.props.data.map((datum)=>{
                return <DataItem className="item" key={datum} datum={datum} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default DataModal;

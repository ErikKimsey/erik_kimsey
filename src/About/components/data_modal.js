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

  /**
   * 1. click modal title,
   * 2. set isActive to true,
   * 3. if isActive === true: set list-container display to "flex" ,
   * 4. if isActive === true: set list-container display to "flex" ,
   * 5. 
   */
  
  componentDidMount() {
    let modal = document.querySelector('.modal-triggered-container');
    
    
  }

  handleToggle = () => {
    let modal = document.querySelector('.modal-triggered-container');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
  }

  render(){
    return (
      <div className="modal-container" onClick={this.handleToggle}>
        <h1>{this.props.title}</h1>
        <div className="modal-triggered-container" onClick={this.handleToggle}>
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

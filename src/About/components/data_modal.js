import React, { Component } from 'react';
import './styles/data_modal.scss';
import DataItem from './data_item';

class DataModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      data: this.props.data,
      title: this.props.title,
    }
    console.log(this.state.data)
  }

  
  componentDidMount() {
    let modal = document.querySelector('.modal-triggered-container');
    modal.style.display = 'none';
  }

  openModal = () => {
    let modal = document.querySelector('.modal-triggered-container');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
  }

  closeModal = () => {
    let modal = document.querySelector('.modal-triggered-container');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
  }

  render(){
    return (
      <div className="modal-container">
        <h1 onClick={this.openModal}>{this.state.title}</h1>
        <div className="modal-triggered-container" onClick={this.closeModal}>
          <div className="list-container">
            {
              this.state.data.map((datum)=>{
                {/* console.log(datum); */}
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

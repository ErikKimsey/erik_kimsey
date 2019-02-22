import React, { Component } from 'react';
import './styles/data_modal.scss';
import DataItem from './data_item';

class DataModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      data: [],
      title: this.props.title,
    }
    // console.log(this.props.data);
  }

  
  componentDidMount() {
    let modal = document.querySelector('.modal-triggered-container');
    modal.style.display = 'none';
    let nuArr = this.props.data.slice();
    this.setState({data: nuArr});

  }

  openModal = () => {
    this.setState({isActive: true});

    
  }
  
  closeModal = () => {
    let modal = document.querySelector('.modal-triggered-container');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
  }

  render(){
    // console.log(this.state.data);
    
    return (
      <div className="modal-container">
        <h1 onClick={this.openModal}>{this.state.title}</h1>
        <div className="modal-triggered-container" onClick={this.closeModal}>
          <div className="list-container">
            {
          
                this.state.data.map((e,i)=>{
                  {/* console.log(e); */}
                  return <DataItem data={e}/>
                })
       
  
            }
          </div>
        </div>
      </div>
    )
  }
}

export default DataModal;

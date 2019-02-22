import React , {Component} from 'react';
import DataItem from '../components/data_item';
import './styles/data_modal.scss';

class DataModal extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      isActive: false,
    }
  }

  handleToggle = () => {
    // let modal = document.querySelector('.list-container');
    // modal.classList.toggle('list-container-active');  
    // console.log(modal);
    // this.setState({isActive: !this.state.isActive});
  }
 
  render(){
    return (
      <div className="modal-container">
      <h1 onClick={this.handleToggle}>{this.props.title}</h1>
      <div className="list-container">
        {
      
              this.props.data.map((item)=>{
                return (
                  <DataItem key={item} data={item}/>
                )
              })
      
        }
      </div>


      </div>
    )
  }
}

export default DataModal;
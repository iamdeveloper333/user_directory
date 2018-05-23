import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteDirectories} from '../actions/directoriesAction';
import {bindActionCreators} from 'redux';
import Modal from './Modal';

class Dropdown extends Component {

  constructor(props){
    super(props);
    this.delete=this.delete.bind(this);
  }
	
  delete(){
    this.props.deleteDirectories(this.props.username);
  }

  render(){    
    return(
      <div className="float-right">
          <div className="dropdown">
              <button className="dropdown-btn"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">                
                <a className="dropdown-item" href="#">
                  <Modal/>
                </a>
                <a className="dropdown-item" href="#"><button className="delete-btn" onClick={this.delete}><i className="fa fa-trash pr-2" aria-hidden="true"></i>Delete User</button></a>
              </div>
         </div>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteDirectories
  }, dispatch)
}

export default connect(null,mapDispatchToProps)(Dropdown);

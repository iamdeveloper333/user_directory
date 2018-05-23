import React, { Component } from 'react';
import AddUser from './AddUser';

class Modal extends Component {
	
  render(){    
    return(
      <div>
          <button type="button" className="btn btn-primary add-user" data-toggle="modal" data-target="#exampleModal">
           <span style={{paddingRight:"5px"}}><i className="fa fa-plus-circle" aria-hidden="true"></i></span> Add New User
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <AddUser/>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Modal;
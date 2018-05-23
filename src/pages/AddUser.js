import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postDirectories} from '../actions/directoriesAction';

class AddUser extends Component {
	 constructor(props){
      super(props);
      this.handleSubmit=this.handleSubmit.bind(this);
   }

   handleSubmit(e){
      e.preventDefault();
      const data=[{
        id: findDOMNode(this.refs.id).value,
      ImgURL: findDOMNode(this.refs.ImgURL).value,
      username: findDOMNode(this.refs.username).value,
      address: findDOMNode(this.refs.address).value,
      number: findDOMNode(this.refs.number).value,
      email: findDOMNode(this.refs.email).value
    }]
    this.props.postDirectories(data);
  }

  render(){    
    return(
      <div className="form px-2" style={{margin:'0px auto'}}>
          <form>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12"> 
                        <div className="form-group">
                          <label htmlFor="exampleInputid">Id</label>
                          <input type="number"  className="form-control" id="exampleInputid" ref="id" placeholder="enter id"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                   <div className="col-md-4">
                       <div className="form-group">
                          <label htmlFor="exampleInputImgURL">Image URL</label>
                          <input type="text" className="form-control url-label" id="exampleInputuser" ref="ImgURL" placeholder="enter image link"/>
                        </div>
                    </div>
                   <div className="col-md-8">
                        <div className="form-group">
                          <label htmlFor="exampleInputuser">User Name</label>
                          <input type="text" className="form-control" id="exampleInputuser" ref="username" placeholder="enter full name"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputuser">Address</label>
                          <input type="text" className="form-control" id="exampleInputuser" ref="address" placeholder="enter address"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputnumber">Number</label>
                        <input type="number" className="form-control" id="exampleInputnumber" ref="number" placeholder="enter contact"/>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputemail">Email</label>
                        <input type="email" className="form-control" id="exampleInputemail" ref="email" placeholder="enter email"/>
                      </div>
                  </div>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-block btn-primary py-2" style={{fontSize: "12px"}}>Add New User</button>
              </div>
          </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postDirectories},dispatch)
}
export default connect(null,mapDispatchToProps)(AddUser);
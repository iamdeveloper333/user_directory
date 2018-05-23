import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getDirectories} from '../actions/directoriesAction';
import {bindActionCreators} from 'redux';
import SingalUser from './SingalUser';
import json from '../db.json'

class DirectoriesList extends Component {
	componentDidMount(){
    this.props.getDirectories(json);
  }

  render(){
    const directoriesList = this.props.directories.map(function(directoriesArr){
      return(
        <SingalUser key={directoriesArr.id}
                ImgURL={directoriesArr.ImgURL} 
                username={directoriesArr.username}              
                address={directoriesArr.address}
                number={directoriesArr.number}
                email={directoriesArr.email}
                />
      )
    })
    
    return(
      <div className="user-directory">
        <div className="row p-0 m-0">
          <div className="col-lg-12 p-0 d-inline-block">
            <table className="table mb-0">
              <thead className="thead-inverse">
                  <tr>
                      <th>User Name</th>
                      <th>Address</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th></th>
                  </tr>
              </thead>
              {directoriesList}
            </table>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    directories: state.directories.directories
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getDirectories,
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(DirectoriesList);
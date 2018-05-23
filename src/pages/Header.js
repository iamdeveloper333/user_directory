import React, { Component } from 'react';
import Modal from './Modal';


class Header extends Component {	
  render(){    
    return(
      <nav className="navbar navbar-expand-sm navbar-light bg-white py-4">
        <div className="container">
          <a className="navbar-brand" href="#">User Directory</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Modal/>
                    </a>
                </li>                  
            </ul>
        </div>
    </nav>
    )
  }
}
export default Header;
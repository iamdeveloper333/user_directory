import React, { Component } from 'react';
import DropDown from './DropDown';

class SingalUser extends Component {


	render(){ 
        return(
            <tbody>
                <tr>
                    <td><img src={`${this.props.ImgURL}` }/>{this.props.username}</td>
                    <td>{this.props.address}</td>
                    <td>{this.props.number}</td>
                    <td>{this.props.email}</td>
                    <td><DropDown id={this.props.id} username={this.props.username} address={this.props.address} number={this.props.number} email={this.props.email}/></td>
                </tr>
            </tbody>
            )
        }
}

export default SingalUser;

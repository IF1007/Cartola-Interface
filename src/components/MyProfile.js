import React, { Component } from 'react';
import logoComplete from './images/logo-title.png';
import logo from './images/logo.png';
import heart from './images/heart.png';
import './Home.css';
import Modal from 'react-modal';

class MyProfile extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      token: '',
      data: [{
          Pos: 'Goleiro',
          Nome: "Magrão",
          Valor: 100
      },{
          Pos: "Atacante",
          Nome: "Neymar Jr.",
          Valor: 100
      }]
    };

    this.logOut = this.logOut.bind(this);
  }

  logOut(){
    window.location = 'http://localhost:3000/';
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoComplete} className="App-logo" alt="logo" />
		  
		  <button className="login-button" onClick={this.logOut}>Logout</button>
          
        </header>
        <div className="footer">
        <table id="customers">
        <tbody>{this.state.data.map(function(item, key) {
             return (
                
                <tr key = {key}>
                    <td>{item.Pos}</td>
                    <td>{item.Nome}</td>
                    <td>{item.Valor}</td>
                </tr>
              )
           
           })}</tbody>
          
        </table>
        </div>
      </div>
    );
  } 

  
}


export default MyProfile;

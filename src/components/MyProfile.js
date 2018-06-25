import React, { Component } from 'react';
import logoComplete from './images/logo-title.png';
import logo from './images/logo.png';
import heart from './images/heart.png';
import './Home.css';
import Modal from 'react-modal';
import axios from 'axios'

class MyProfile extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      token: '',
      cartoletas: 0,
      data: []
    };

    this.logOut = this.logOut.bind(this);
    this.getPlayer = this.getPlayer.bind(this);
    this.handleChangeCartoletas = this.handleChangeCartoletas.bind(this);
  }

  handleChangeCartoletas(event){
    this.setState({cartoletas: event.target.value});
  }

  logOut(){
    window.location = 'http://localhost/';
  }

  getPlayer(){
    alert(this.state.token)
    axios.get('http://naming-service:4000/lookup?name=processor')
      .then(url => {
        alert(url)
        return axios.get(`http://localhost:3000/players/${this.state.cartoletas}`)
      })
      .then(res => {
        alert('pegou os broder')
        const jogadores = res.data;
        this.setState({data: jogadores});
      }).catch(function (error) {
        console.log(error);
        alert('Servidor fora do ar.')
      })
    /* EXEMPLO SIMPLES 
    alert(this.state.cartoletas)
    this.setState({data: [{
      Pos: 'Goleiro',
      Nome: "Magrão",
      Valor: 100
  },{
      Pos: "Atacante",
      Nome: "Neymar Jr.",
      Valor: 100
  },{
    Pos: "Engenheiro de software",
    Nome: "Pinho camisa 10",
    Valor: 100
  }]});*/
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoComplete} className="App-logo" alt="logo" />
		  
		  <button className="login-button" onClick={this.logOut}>Logout</button>
          
        </header>
        <div className="App">
          <div className="input-cart">
            <label ><b>Informe suas cartoletas</b></label>
            </div>
            <div className="input-cart">
            <input type="number"
                  value={this.state.cartoletas}
                  placeholder="cartoletas"
                  name="nome" 
                  onChange={this.handleChangeCartoletas}
                  required/>
            </div>
            <div className="input-cart">
              <button className="request-button" onClick={this.getPlayer}>Consultar</button>
            </div>
        </div>
        <div className="App">
          <table id="customers">
            <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Valor</th>
            </tr>
            </thead>
            <tbody>{this.state.data.map(function(item, key) {
              return (
                  
                  <tr key = {key}>
                      <td>{item.Pos}</td>
                      <td>{item.Nome}</td>
                      <td>{item.Valor}</td>
                  </tr>
                )
            })}
            </tbody>
            
          </table>
        </div>
      </div>
    );
  } 

  
}


export default MyProfile;

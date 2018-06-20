import React, { Component } from 'react';
import logoComplete from './images/logo-title.png';
import logo from './images/logo.png';
import heart from './images/heart.png';
import './Home.css';
import Modal from 'react-modal';
import axios from 'axios'
import MyProfile from './MyProfile'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      signUplogin: '',
      signInlogin: 'teste',
      signInPassword: '123',
      signUpPassword: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSignUp = this.handleChangeSignUp.bind(this);
    this.handleChangePasswordSignUp = this.handleChangePasswordSignUp.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleChange(event) {
    this.setState({signInlogin: event.target.value});
  }

  handleChangeSignUp(event) {
    this.setState({signUplogin: event.target.value});
  }

  handleChangePassword(event){
    this.setState({signInPassword: event.target.value});
  }

  handleChangePasswordSignUp(event){
    this.setState({signUpPassword: event.target.value});
  }

  signIn(){
    let data = JSON.stringify({
      username: this.state.signInlogin,
      password: this.state.signInPassword
    })
    axios.post('http://localhost:3002/signin', data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',        
      }
    }).then(function (response) {
      console.log(response);
      console.log(response.data);
      window.teste = 'dale'
      window.location = 'http://localhost:3000/myProfile?token=' + response.data;
    })
    .catch(function (error) {
      console.log(error);
      alert('Servidor fora do ar.')
    });
  }

  signUp(){
    fetch('http://localhost:3002/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*' 
      },
      body: JSON.stringify({
        'username': this.state.signUplogin,
        'password': this.state.signUpPassword, 
      })
    })
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div style={{float:'left'}}>
          <img src={logoComplete} className="App-logo" alt="logo" />
        </div>
        <div>
          <button className="login-button" onClick={this.signIn}>login</button>
          <input type="password"
                value={this.state.signInPassword}
                className="input-login"
                placeholder="Digite sua Senha"
                name="nome" 
                onChange={this.handleChangePassword}
                required/>
          <label className="input-login-label"><b>Senha</b></label>
          <input type="text"
                value={this.state.signInlogin}
                className="input-login"
                placeholder="Digite seu login"
                name="nome" 
                onChange={this.handleChange}
                required/>
          <label className="input-login-label"><b>Login</b></label><br/><br/>
        </div>
        <div>
          <a href="#" onClick={this.openModal} className="input-signout">Cadastre-se!</a>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="modal-content animate"
        >
          <div className="container">
            <span onClick={this.closeModal} className="close" title="Close Modal">&times;</span>
            <div className="image-centralize">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <form>
              <div>
                <label for="uname"><b>Login</b></label>
              </div>
              <div className="input-container">
                <input type="text"
                  value={this.state.signUplogin}
                  className="input-signup"
                  placeholder="Digite seu login"
                  name="nome" 
                  onChange={this.handleChangeSignUp}
                  required/>
              </div>
              <div>
                <label for="psw"><b>Senha</b></label>
              </div>
              <div className="input-container">
                <input type="password" 
                value={this.signUpPassword} 
                className="input-signup" 
                placeholder="Digite sua senha"
                onChange={this.handleChangePasswordSignUp}
                name="senha" 
                required/>
              </div>
              <div>
                <button type="submit" className="login-button-modal" onClick={this.teste}>Cadastrar</button>
              </div>
            </form>
          </div>
        </Modal>
        </header>
        <div className="footer">
          <p className="App-intro">
            Created with <img src={heart} className="heart" alt="logo" /> by 6 - 2 guys who do not know how to work together.
          </p>
          <ul>
            <li>Dickson Rammon Oliveira de almeida</li>
            <li>Filipe Nogueira Jordão</li>
            <li>Leonardo Ribeiro Borges</li>
            <li>Túlio Paula e Silva de Holanda Cavalcanti</li>
          </ul>
        </div>
      </div>
    );
  } 

  
}
export default Home;

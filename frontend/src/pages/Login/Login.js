import React, { Component } from "react";
import api from "../../services/api";
import logo from "../../assets/usuario.png";

import "./style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    // States
    this.state = { email: "", password: "", id: 0 };

    // Functions
    this.signIn = this.signIn.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);

    if (localStorage.id !== "") {
      document.location.reload();
      localStorage.id = "";
    }
  }

  signIn = async e => {
    e.preventDefault();
    let emp = null;
    if (this.state.email != null && this.state.password != null) {
      emp = await api.get("employees", { email: this.state.email.toString() });
      emp.data.forEach(x => {
        if (x.email === this.state.email && x.password === this.state.password) {
          this.setState({ id: x._id });
          localStorage.id = this.state.id;
          document.location = "/";
        }
      });
    }

    if (this.state.id === 0) {
      alert("Senha inválida!");
    }
  };

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const containerStyle = {
      margin: "-55px auto",
      maxWidth: "350px",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: " column",
      alignItems: "center",
      justifyContent: "center"
    };

    const contentStyle = {
      width: "100%",
      backgroundImage: "white",
      marginTop: "20px",
      borderRadius: "8px",
      padding: "30px",
      border: "1px solid gray"
    };

    const contentLabelStyle = {
      fontSize: "14px",
      color: "#fff",
      fontWeight: "normal",
      marginBottom: "8px",
      fontFamily: "Roboto, Arial, Helvetica, sans-serif"
    };

    const formStyle = {
      display: "flex",
      flexDirection: "column"
    };

    const inputStyle = {
      marginBottom: "20px",
      border: "1px solid gray",
      borderRadius: " 6px",
      height: "45px",
      padding: "0px 15px",
      fontSize: "16px"
    };

    const buttonStyle = {
      border: 0,
      borderRadius: "4px",
      width: "100%",
      height: "42px",
      padding: " 0 20px",
      fontSize: "16px",
      fontWeight: " bold",
      background: "#326da8",
      color: "white",
      cursor: "pointer"
    };

    const buttonRegister = {
      border: 0,
      borderRadius: "4px",
      width: "100%",
      height: "42px",
      padding: " 0 20px",
      fontSize: "16px",
      fontWeight: " bold",
      background: "#3f51b5",
      color: "white",
      cursor: "pointer"
    };

    const img = {
      maxWidth: "30%"
    };

    return (
      <div className="container" style={containerStyle} onMouseOver={this.onlyAdm}>
        <img src={logo} style={img} alt="Bibilioteca Toth " />
        <div className="content" style={contentStyle}>
          <form style={formStyle} action="">
            <label style={contentLabelStyle} htmlFor="email">
              {" "}
              E-MAIL
            </label>

            <input
              style={inputStyle}
              type="email"
              id="email"
              placeholder="Digite o seu Email"
              value={this.state.email}
              onChange={this.setEmail}
            />

            <label style={contentLabelStyle} htmlFor="senha">
              {" "}
              SENHA
            </label>

            <input
              style={inputStyle}
              type="password"
              id="senha"
              placeholder="Digite a sua Senha"
              value={this.state.password}
              onChange={this.setPassword}
            />

            <div className="div-buttons">
              <button id="entry-button" style={buttonStyle} onClick={this.signIn} align="right">
                Entrar
              </button>

              <button id="register-button" style={buttonRegister}>
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

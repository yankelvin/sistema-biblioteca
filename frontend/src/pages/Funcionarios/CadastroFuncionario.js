import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import BotaoSucesso from "../../components/BotaoSucesso";

import api from "../../services/api";

export default class CadastroFuncionario extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      oabNumber: null,
      password: null,
      email: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    const { name, oabNumber, password, email } = this.state;
    event.preventDefault();

    const data = {
      name,
      oabNumber,
      password,
      email
    };

    const response = await api.post("new/employee", data);
    console.log(response.data);
    alert("Funcionário cadastrado com sucesso!");
  };

  render() {
    return (
      <Fragment>
        <div align="center">
          <br />
          <br />
          <code>
            <h2>Cadastro de Funcionário</h2>
          </code>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="name"
              label="Nome do Funcionário*"
              name="name"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              id="email"
              label="Email do Funcionário*"
              name="email"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              id="oabNumber"
              label="Número OAB (se tiver)"
              name="oabNumber"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              type="password"
              id="password"
              label="Senha*"
              name="password"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br></br>
            <BotaoSucesso href="/" />
            <Button href="/" color="primary">
              Cancelar
            </Button>

            <br />
          </form>
        </div>
      </Fragment>
    );
  }
}

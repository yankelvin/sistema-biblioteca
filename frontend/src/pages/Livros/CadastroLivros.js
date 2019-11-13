import React, { Fragment } from "react";

//Material-ui
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Utils
import api from "../../services/api";

//
import BotaoSucesso from "../../components/BotaoSucesso";

export default class CreateBook extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "",
      name: "",
      author: "",
      publisher: "",
      yearPublication: "",
      area: "",
      purchaseDate: "",
      pricePaid: ""
    };
  }

  handleImageChange = event => {
    this.setState({ image: event.target.files[0] });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(`${event.target.name}: ${event.target.value}`);
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", this.state.image);
    data.append("name", this.state.name);
    data.append("author", this.state.author);
    data.append("publisher", this.state.publisher);
    data.append("yearPublication", this.state.yearPublication);
    data.append("area", this.state.area);
    data.append("purchaseDate", this.state.purchauseDate);
    data.append("pricePaid", this.state.pricePaid);

    console.log(data);

    await api.post("new/book", data);

    alert("Livro cadastrado com sucesso!");
  };

  render() {
    return (
      <Fragment>
        <div align="center">
          <br />
          <br />
          <code>
            <h2>Cadastre um Livro</h2>
          </code>
          <form onSubmit={this.handleSubmit}>
            <input type="file" name="image" onChange={this.handleImageChange} />

            <br />
            <TextField
              name="name"
              id="name"
              label="Nome do Livro"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              name="author"
              id="author"
              label="Nome do Autor"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              name="publisher"
              id="publisher"
              label="Nome da Editora"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              name="area"
              id="area"
              label="Área de conhecimento"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              name="yearPublication"
              id="yearPublication"
              label="Ano de Publicação"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <TextField
              name="purchaseDate"
              id="purchaseDate"
              label="Data de Compra"
              onChange={this.handleChange}
              margin="normal"
              variant="standard"
              style={{ width: 550 }}
            />

            <br />
            <br />
            <InputLabel htmlFor="preco" style={{ marginRight: 450 }} onChange={this.handleChange}>
              Preço do Livro
            </InputLabel>

            <Input
              name="pricePaid"
              id="pricePaid"
              type="number"
              onChange={this.handleChange}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              style={{ marginRight: 310, width: 240 }}
            />

            <BotaoSucesso />

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

import React, { Component } from "react";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";

// import { Container } from './styles';
import api from "../../services/api";

import "./Livro.css";

export default class Livros extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    const response = await api.get("books");
    this.setState({ books: response.data });
    console.log(response);
  }

  render() {
    return (
      <div className="container-books">
        <table id="customers">
          <tr>
            <th>Nome</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Area</th>
            <th>Data de compra</th>
            <th>Preço Pago</th>
          </tr>
          {this.state.books.map(book => (
            <tr>
              <th>{book.name}</th>
              <th>{book.author}</th>
              <th>{book.publisher}</th>
              <th>{book.area}</th>
              <th>{book.purchaseDate}</th>
              <th>{book.pricePaid}</th>
              <th>
                <button id="trash-button">
                  <DeleteForeverIcon />
                </button>
              </th>
              <th>
                <button id="update-button">
                  <UpdateIcon />
                </button>
              </th>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";

// import { Container } from './styles';
import api from "../../services/api";

export default class Livros extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    const response = api.get("/books");
    this.setState({ books: response.data });
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="container-customers">
        <table id="customers">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </table>
      </div>
    );
  }
}

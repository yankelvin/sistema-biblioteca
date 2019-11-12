// React
import React, { Component } from "react";

//Utils
import api from "../../services/api";

// Components
import Book from "../Home/book";

export default class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { feed: { reservedBooks: [] } };
  }

  async componentDidMount() {
    if (localStorage.id !== "") {
      const response = await api.post("employees", { _id: localStorage.id });
      this.setState({ feed: response.data[0] });
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <div>
          <h3 className="text-center">Livros Reservados</h3>
        </div>

        <div className="row mt-5">
          {this.state.feed.reservedBooks.map(book => (
            <Book key={book.name} book={book}></Book>
          ))}
        </div>
      </div>
    );
  }
}

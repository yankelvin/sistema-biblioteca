// React
import React, { Component } from "react";

//Utils
import api from "../../services/api";

// Components
import Book from "./Book";

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
        <div className="row mt-5">
          {this.state.feed.reservedBooks.map(book => (
            <Book reserved={true} key={book._id} book={book}></Book>
          ))}
        </div>
      </div>
    );
  }
}

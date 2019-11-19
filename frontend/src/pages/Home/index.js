// React
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

//Utils
import api from "../../services/api";

// Components
//import Book from "../Book/index";
import Book from "../Book/Book";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { feed: [] };
  }

  async componentDidMount() {
    const response = await api.get("books");
    this.setState({ feed: response.data });
  }

  render() {
    return (
      <div className="container" onMouseOver={this.onlyAdm}>
        <main role="main" className="mt-5 text-center">
          <h3>Lista de Livros Disponíveis</h3>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {this.state.feed.map(book => (
                  <Book key={book._id} book={book}></Book>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

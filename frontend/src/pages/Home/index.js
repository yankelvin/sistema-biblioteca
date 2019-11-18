// React
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

//Utils
import api from "../../services/api";

// Components
import Book from "./book";

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
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "450px" }}
              src="https://abrilexame.files.wordpress.com/2017/10/maskarad.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

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
